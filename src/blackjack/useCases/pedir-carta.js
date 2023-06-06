//import {deck} from '../index'


/**
 * Esta función me permite tomar una carta
 * @param {string}
 * @returns {string} retorna la carta del deck
 */


export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}

export default pedirCarta;