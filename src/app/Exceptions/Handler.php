<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Laravel\Socialite\Two\InvalidStateException;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        if (request()->is('api/*')) {
            $this->renderable(function (NotFoundHttpException $e, $request) {
                return response()->json(['status'=>404, 'message'=>'Not found'], 404);
            });

            $this->renderable(function (MethodNotAllowedHttpException $e, $request) {
                return response()->json(['status'=>405, 'message'=>'The GET method is not supported for this route'], 404);
            });

            $this->renderable(function (AccessDeniedHttpException $e, $request) {
                return response()->json(['status'=>403, 'message'=>'Access denied'], 403);
            });

            $this->renderable(function (BadRequestHttpException $e, $request) {
                return response()->json(['status'=>403, 'message'=>$e->getMessage()], 403);
            });

            $this->renderable(function (ImageException $e, $request) {
                return response()->json(['status'=>403, 'message'=>$e->getMessage()], 403);
            });

            $this->renderable(function (AuthException $e, $request) {
                return response()->json(['status'=>404, 'message'=>$e->getMessage()], 400);
            });

            $this->renderable(function (InvalidStateException $e, $request) {
                return response()->json(['status'=>400, 'message'=>$e->getMessage()], 400);
            });
        }

        $this->renderable(function (InvalidStateException $e, $request) {
            return abort(403, 'Authorisation Error');
        });

        $this->renderable(function (AuthException $e, $request) {
            return abort(403, $e->getMessage());
        });
    }
}
