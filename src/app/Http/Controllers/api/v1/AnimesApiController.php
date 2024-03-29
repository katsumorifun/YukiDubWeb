<?php

/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

namespace App\Http\Controllers\api\v1;

use App\Facades\ImageService;
use App\Http\Requests\AnimeRequest;
use App\Http\Requests\CreateAnimeRequest;
use App\Http\Requests\SendVoteRequest;
use App\Http\Resources\AnimeResource;
use App\Models\Anime;
use App\Services\HistoryService;
use App\Services\VoteService;
use Illuminate\Http\JsonResponse;

class AnimesApiController extends ApiController
{
    public function __construct()
    {
        $this->resource = AnimeResource::class;
        parent::__construct();
    }

    /**
     * Display a listing of the resource.
     *
     * @OA\Get(
     *     path="/anime",
     *     tags = {"Anime"},
     *     @OA\Response(response="200", description="Display a listing of the resource"),
     *     @OA\Response(
     *          response="404",
     *          description="not found",
     *          @OA\JsonContent(
     *              type="array",
     *              @OA\Items(ref="#/components/schemas/NotFoundRequest")
     *          )
     *      ),
     *
     *     @OA\Parameter(
     *          name = "perPage",
     *          in = "query",
     *          description = "number of people per page",
     *          required=false,
     *          @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Parameter(
     *          name = "page",
     *          in = "query",
     *          description = "page",
     *          required=false,
     *          @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *
     *     @OA\Parameter(
     *          name = "genres",
     *          in = "query",
     *          description = "genres",
     *          required=false,
     *          @OA\Schema(
     *             type="array",
     *             @OA\Items(
     *                  type="string"
     *              )
     *         )
     *     ),
     *
     *    @OA\Parameter(
     *          name = "studios",
     *          in = "query",
     *          description = "studios",
     *          required=false,
     *          @OA\Schema(
     *             type="array",
     *             @OA\Items(
     *                  type="string"
     *              )
     *         )
     *     )
     * )
     *
     * @return \Illuminate\Http\Resources\Json\ResourceCollection
     */
    public function index(AnimeRequest $request): \Illuminate\Http\Resources\Json\ResourceCollection
    {
        $relations = $request->get('relations') ?? ['studios', 'genres'];
        $perPage = $request->get('perPage') ?? 8;

        $anime = Anime::with($relations)
            ->ofGenres($request->get('genres') ?? [])
            ->ofStudios($request->get('studios') ?? [])
            ->fields($request->get('fields') ?? ['*'])
            ->ofOrders($request->get('orders') ?? [])
            ->ofStatus($request->get('status'))
            ->ofAgeRating($request->get('rating'));

        return $this->response->withCollection($anime->paginate($perPage));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CreateAnimeRequest $request
     *
     * @return JsonResponse
     */
    public function store(CreateAnimeRequest $request): JsonResponse
    {
        if ($request->user()->cannot('create', Anime::class)) {
            return $this->response->withForbidden();
        }

        $anime = (new Anime())->fill($request->validated());

        if ($request->hasFile('poster')) {
            $anime->uploadPoster($request->file('poster'));
        }

        $anime->save();
        $anime->genres()->attach($request->get('genres'));
        $anime->studios()->attach($request->get('studios'));

        return $this->response->withCreated(
            [
                'anime_id'=> $anime->getKey(),
            ]
        );

        //$date = (Carbon::make($this->aired_on))->format('z');
        //if($date < 80 || $date > 356){
        //    return 'Winter';
        //}
        //if($date < 173){
        //    return 'Spring';
        //}
        //if($date < 266){
        //    return 'Summer';
        //}
    }

    /**
     * Display the specified resource.
     *
     *   @OA\Get   (
     *     path="/anime/{id}",
     *     tags = {"Anime"},
     *     @OA\Response(
     *          response=201,
     *          description="Display the specified resource",
     *          @OA\MediaType(mediaType="application/json")
     *     ),
     *     @OA\Response(
     *          response="404",
     *          description="anime not found",
     *          @OA\JsonContent(
     *              type="array",
     *              @OA\Items(ref="#/components/schemas/NotFoundRequest")
     *          )
     *      ),
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="The anime id",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *         )
     *     )
     * )
     *
     * @param int $id
     *
     * @return JsonResponse
     */
    public function show($id)
    {
        $anime = Anime::with(['genres', 'studios', 'staff', 'scoreInfo', 'characters'])
            ->fields(request()->get('fields') ?? ['*'])
            ->findOrFail($id)
            ->scoreVotes();

        return $this->response->withItem($anime);
    }

    /**
     * Update the specified resource in storage.
     *
     *   @OA\Patch(
     *     path="/anime/{id}",
     *     tags = {"Anime"},
     *     security={
     *       {"Authorization": {}},
     *     },
     *     @OA\Response(
     *          response=201,
     *          description="Display the specified resource",
     *          @OA\MediaType(mediaType="application/json")
     *     ),
     *     @OA\Response(
     *          response="404",
     *          description="anime not found",
     *          @OA\JsonContent(
     *              type="array",
     *              @OA\Items(ref="#/components/schemas/NotFoundRequest")
     *          )
     *      ),
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="The anime id",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *         )
     *     )
     * )
     *
     * @param \Illuminate\Http\Request $request
     * @param int                      $id
     *
     * @return JsonResponse
     */
    public function update(AnimeRequest $request, $id)
    {
        $anime = Anime::findOrFail($id);
        $anime->fill($request->validated());

        if (!$anime->isDirty()) {
            return $this->response->noChanges();
        }

        if ($request->user()->cannot('update', Anime::class)) {
            $historyService = new HistoryService();
            $historyService->updateAction('update anime', 'moderate', \Auth::user()->id, $anime);

            return $this->response->moderatedStatus();
        }

        if ($request->hasFile('poster')) {
            $anime->uploadPoster($request->file('poster'));
        }

        $anime->update();

        return $this->response->acceptedStatus();
    }

    /**
     * Update poster the specified resource.
     *
     *   @OA\Post(
     *     path="/anime/{id}/poster",
     *     tags = {"Anime"},
     *     security={
     *       {"Authorization": {}},
     *     },
     *     @OA\Response(
     *          response=201,
     *          description="Display the specified resource",
     *          @OA\MediaType(mediaType="application/json")
     *     ),
     *     @OA\Response(
     *          response="404",
     *          description="anime not found",
     *          @OA\JsonContent(
     *              type="array",
     *              @OA\Items(ref="#/components/schemas/NotFoundRequest")
     *          )
     *      ),
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="The anime id",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="poster",
     *         in="query",
     *         description="Poster file",
     *         required=true,
     *         @OA\Schema(
     *             type="file",
     *         )
     *     )
     * )
     **/
    public function updatePoster(AnimeRequest $request, $id): JsonResponse
    {
        $anime = Anime::findOrFail($id);

        $image = ImageService::upload($request->file('poster'), $anime->nameEn, '/animes/moderate');
        $anime->poster_original = $image['original'];

        if (!$request->user()->cannot('update', Anime::class)) {
            $historyService = new HistoryService();
            $historyService->updateAction('update anime poster', 'moderate', \Auth::user()->id, $anime);

            return $this->response->moderatedStatus();
        }

        $anime->uploadPoster($request->file('poster'));
        $anime->save();

        return $this->response->acceptedStatus();
    }

    /**
     * Remove the specified resource from storage.
     *
     *  @OA\Delete  (
     *     path="/anime/{id}",
     *     tags = {"Anime"},
     *     security={
     *       {"Authorization": {}},
     *     },
     *     @OA\Response(
     *          response=200,
     *          description="removed",
     *          @OA\MediaType(mediaType="application/json")
     *     ),
     *     @OA\Response(
     *          response="404",
     *          description="anime not found",
     *          @OA\JsonContent(
     *              type="array",
     *              @OA\Items(ref="#/components/schemas/NotFoundRequest")
     *          )
     *      ),
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="the anime id",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *         )
     *     )
     * )
     *
     * @param int $id
     *
     * @return JsonResponse
     */
    public function destroy($id): JsonResponse
    {
        $anime = Anime::findOrFail($id);
        $anime->delete();

        return $this->response->withNoContent();
    }

    /**
     * Sending vote.
     *
     *  @OA\Post  (
     *  path="/anime/{id}/vote",
     *  tags = {"Anime"},
     *  security={
     *    {"Authorization": {   }},
     *  },
     *  @OA\Response(
     *          response=201,
     *          description="sended",
     *          @OA\MediaType(mediaType="application/json")
     *     ),
     *  @OA\Response(
     *       response="404",
     *       description="anime not found",
     *       @OA\JsonContent(
     *           type="array",
     *           @OA\Items(ref="#/components/schemas/NotFoundRequest")
     *       )
     *   ),
     *  @OA\Parameter(
     *      name="id",
     *      in="path",
     *      description="the anime id",
     *      required=true,
     *      @OA\Schema(
     *          type="integer",
     *      )
     *  ),
     *  @OA\Parameter(
     *      name="vote",
     *      in="query",
     *      description="vote field",
     *      required=true,
     *      @OA\Schema(
     *          type="integer",
     *      )
     *  )
     * )
     * Sending vote
     *
     * @param $id
     * @param SendVoteRequest $request
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|JsonResponse|\Illuminate\Http\Response
     */
    public function vote($id, SendVoteRequest $request)
    {
        $anime = Anime::findOrFail($id);

        if ($request->user()->cannot('createVote', $anime)) {
            return $this->response->withForbidden(['Access denied']);
        }

        $voteService = new VoteService();
        $status = $voteService->createVote(Auth()->user()->id, $request->get('vote'), $anime->score);

        return $this->response->json(['status'=>$status]);
    }
}
