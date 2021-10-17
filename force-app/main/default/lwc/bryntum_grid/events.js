const READY_EVENT = 'ready';
const ERROR_EVENT = 'error';

class ReadyEvent extends CustomEvent {
    constructor() {
        super(ReadyEvent.type);
    }

    static get type() {
        return READY_EVENT;
    }
}

class ErrorEvent extends CustomEvent {
    constructor(Error) {
        super(ErrorEvent.type, {
            detail: Error
        });
    }

    static get type() {
        return ErrorEvent;
    }
}

export {
    ReadyEvent, ErrorEvent
};