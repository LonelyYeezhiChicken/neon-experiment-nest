import { Controller, Get } from '@nestjs/common';
import { AppService } from '../service/app.service';

@Controller()
export class BookController {
    constructor(private readonly appService: AppService) { }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
}
