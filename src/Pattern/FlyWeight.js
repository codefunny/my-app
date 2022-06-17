let examCarNum = 0;
class ExamCar {
    constructor(carType) {
        examCarNum++;
        this.carId = examCarNum;
        this.carType = carType ? 'manual' : 'auto';
        this.usingState = false;
    }

    examine(candidateId) {
        return new Promise((resolve => {
            this.usingState = true;
            console.log(`考生- ${candidateId} start ${this.carType} - ${this.carId} exame`);

            setTimeout(() => {
                this.usingState = false;
                console.log(`考生- ${candidateId} start ${this.carType} - ${this.carId} done`);
                resolve();
            }, 2000 * Math.random());
        }))
    }
}

const ManualExamCarPool = {
    _pool: [],
    _candidateQueue: [],

    registeCandidates(candidateList) {
        candidateList.forEach(candidateId => 
            this.registeCandidate(candidateId)
        )
    },

    registeCandidate(candidateId) {
        const examCar = this.getManualExamCar();
        if(examCar) {
            examCar.examine(candidateId).then(() => {
                const next = this._candidateQueue.length && this._candidateQueue.shift();
                next && this.registeCandidate(next);
            });
        } else {
            this._candidateQueue.push(candidateId);
        }
    },

    initManualExamCar(manualCarNum) {
        for (let i = 1;i < manualCarNum; i++) {
            this._pool.push(new ExamCar(true));
        }
    },

    getManualExamCar() {
        return this._pool.find(car => !car.usingState);
    }
}

export default class FlyWeidhtTest {
    static main() {
        ManualExamCarPool.initManualExamCar(3);
        ManualExamCarPool.registeCandidates([1,2,3,4,5,6,7,8,9]);
    }
}