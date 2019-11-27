export const FRAMWORK_CHANGE="FRAMWORK_CHANGE";
export const OPERATOR_CHANGE="OPERATOR_CHANGE";
export const GENERATE_CHANGE="GENERATE_CHANGE"

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
