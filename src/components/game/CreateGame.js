import React from 'react';
import { useEffect } from 'react';

export default function Game() {
    return (
          <div className="Game">
            <h1>Création de lobby</h1>
            <form>
                <label>
                    Nom du lobby :
                    <input type="text" name="name" />
                </label>
                <label>
                    Bourse de départ :
                    <input type="number" name="money" />
                </label>
                <input type="submit" value="Créer" />
            </form>
          </div>
    );
}