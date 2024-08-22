// ferrari.js
class Ferrari {
    constructor() {
        this.isRunning = false;
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            return 'Ferrari started!';
        } else {
            return 'Ferrari is already running!';
        }
    }

    stop() {
        if (this.isRunning) {
            this.isRunning = false;
            return 'Ferrari stopped!';
        } else {
            return 'Ferrari is already off!';
        }
    }

    status() {
        return this.isRunning ? 'Ferrari is running.' : 'Ferrari is off.';
    }
}

module.exports = Ferrari;
