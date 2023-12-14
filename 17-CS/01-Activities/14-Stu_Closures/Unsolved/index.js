// TODO: Complete the 'counter' function below.
function counter() {
    let totalCount = 0;

    return {
        increment: function ()  {
            return ++totalCount
        }
    }
};

module.exports = counter;
