export const FRAMWORK_CHANGE="FRAMWORK_CHANGE";
export const OPERATOR_CHANGE="OPERATOR_CHANGE";
export const GENERATE_CHANGE="GENERATE_CHANGE";
export const RUN_CLICK = "RUN_CLICK";
export const STORE_LINEDATA = "STORE_LINEDATA";
export const TYPE_CHANGE="TYPE_CHANGE"

export function changeFramwork(framwork) {
    return {
        type:FRAMWORK_CHANGE,
        framwork:framwork,
    }
}

export function changeOperator(operator) {
    return {
        type:OPERATOR_CHANGE,
        operator:operator,
    }
}

export function changeGenerate(generate) {
    return {
        type:GENERATE_CHANGE,
        generate:generate
    }
}
export function clickRun() {
    return {
        type:RUN_CLICK
    }
}

export function storeLine(lineData,lineDataY) {
    return {
        type:STORE_LINEDATA,
        lineData:lineData,
        lineDataY:lineDataY,
    }
}
export function changeType(index) {
    return {
        type:TYPE_CHANGE,
        index:index
    }
}
