let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre: function() {
        return `${ this.nombreb} ${ this.apellido } - poder: ${ this.poder }'`
    }
};

//let nombre = deadpool.no;
//let apellido = deadpool.apellido;
//let poder = deadpool.poder;

let { nombre: primerNombre, apellido, poder } = deadpool;

console.log(primerNombre, apellido, poder);