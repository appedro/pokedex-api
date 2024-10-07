import { Controller, Get, Query, Param } from '@nestjs/common';
import { PokedexService } from './pokedex.service';
import { Pokemon } from './pokemon.model';

@Controller('pokedex')
export class PokedexController {
  constructor(private readonly pokedexService: PokedexService) {}

  @Get('pokemons')
  async getPokemons(@Query('limit') limit: number = 10) {
    return await this.pokedexService.fetchPokemons(limit);
  }

  @Get('pokemon/:name')
  async getPokemonByName(@Param('name') name: string) {
    return await this.pokedexService.searchPokemonByName(name);
  }
}
