import { Controller, Get, Query, Param } from '@nestjs/common';
import { PokedexService } from './pokedex.service';

@Controller('pokedex')
export class PokedexController {
  constructor(private readonly pokedexService: PokedexService) {}

  @Get('pokemons')
  async getPokemons(@Query('limit') limit: number = 10, @Query('offset') offset: number = 0) {
    return await this.pokedexService.fetchPokemons(limit, offset);
  }

  @Get('pokemon/:name')
  async getPokemonByName(@Param('name') name: string) {
    return await this.pokedexService.searchPokemonByName(name);
  }
}
