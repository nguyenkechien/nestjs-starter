import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  ForbiddenException,
  HttpException,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Request, Response } from 'express';

@Catch()
export class AllExceptionFilter
  extends BaseExceptionFilter
  implements ExceptionFilter {
  constructor() {
    super();
  }
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    if (exception instanceof UnauthorizedException) {
      return response.redirect('/auth');
    }

    if (exception instanceof BadRequestException) {
      const statusCode: number = HttpStatus.BAD_REQUEST;
      const message = exception['response']['message'];
      return response.status(statusCode).json({ message });
    }

    if (
      ['CastError', 'ValidationError'].includes(
        exception['constructor']['name'],
      )
    ) {
      const statusCode = HttpStatus.BAD_REQUEST;
      const message = exception['message'];
      return response.status(statusCode).json({ message });
    }

    if (exception instanceof ForbiddenException) {
      const statusCode = HttpStatus.FORBIDDEN;
      const message = 'Permission denied!';
      return response.status(statusCode).json({ message });
    }

    if (exception instanceof HttpException) {
      const statusCode = exception.getStatus();
      const error = exception.getResponse();
      let props = {};
      if (typeof error === 'string') {
        props = { message: error };
      } else props = error;
      return response.status(statusCode).json({ ...props });
    }

    if (
      (exception['code'] || '') == 11000 &&
      typeof exception['errmsg'] != 'undefined'
    ) {
      const message =
        exception['errmsg'].substring(
          exception['errmsg'].indexOf('index: ') + 7,
          exception['errmsg'].indexOf('_1'),
        ) + ' must be unique';
      const statusCode = exception.statusCode || HttpStatus.BAD_REQUEST;
      return response.status(statusCode).json({ message });
    }

    const statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    const message = 'SERVER ERROR';
    return response.status(statusCode).json({ message });
  }
}
