function createAssemblyLine() {
    return{
    hasClima: (myCar) => {
        myCar.temp = 21;
        myCar.tempSettings = 21;
        myCar.adjustTemp = () => {
            if (myCar.temp < myCar.tempSettings) {
                myCar.temp++;
            } else if (myCar.temp > myCar.tempSettings) {
                myCar.temp--;
            }
        }
    },
    hasAudio: (myCar) => {
        myCar.currentTrack = {
            name: null,
            artist: null,
        }
        myCar.nowPlaying = () => {
            if (myCar.currentTrack !== null) {
                console.log(`Now playing ${myCar.currentTrack.name} by ${myCar.currentTrack.artist}`)
            }
        }
    },
    hasParktronic: (myCar) => {
        myCar.checkDistance = (number) => {
            if (number < 0.1) {
                console.log('Beep! Beep! Beep!');
            } else if (number < 0.25 && number >= 0.1) {
                console.log('Beep! Beep!');
            } else if (number < 0.5 && number >= 0.25) {
                console.log('Beep!')
            } else {
                console.log('');
            }
        }
    }
};
}


const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
