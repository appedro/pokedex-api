import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokedexController } from './pokedex/pokedex.controller';
import { PokedexService } from './pokedex/pokedex.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [AppController, PokedexController],
  providers: [AppService, PokedexService],
})
export class AppModule {}
