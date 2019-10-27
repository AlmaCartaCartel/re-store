// Вспомогательная ф-я отвечающая за композицию фкнкций
const compose = (...func) => (comp) => {
    return func.reduceRight(
        (wrapped, f ) => f(wrapped), comp)
}

export default compose;