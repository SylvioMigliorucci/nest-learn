import { Controller, Get, Res} from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get()
    findAll(@Res() response): string {
        // return 'this action return all cats'
       return response.status(200).send('this action return all cats in a express')
    }
}
