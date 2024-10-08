import { Injectable } from '@nestjs/common';
import { forkJoin, lastValueFrom } from 'rxjs';
import { Pokemon, PokemonListResponse } from './pokemon.model';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class PokedexService {
    private baseUrl = 'http://pokeapi.co/api/v2';
    private offset = 0;

    constructor(private readonly httpService: HttpService) { }

    async fetchPokemons(limit: number = 20, offset: number = 0) {
        const url = `${this.baseUrl}/pokemon?limit=${limit}&offset=${offset}`;

        const response = await lastValueFrom(
            this.httpService.get<PokemonListResponse>(url)
        );
        return response.data;
    }

    async searchPokemonByName(name: string): Promise<Pokemon | null> {
        const url = `${this.baseUrl}/pokemon/${name.toLowerCase()}`;
        
        try {
            const response = await lastValueFrom(
                this.httpService.get<Pokemon>(url)
            );
            return response.data;
        } catch (error) {
            return null;
        }
    }
}
