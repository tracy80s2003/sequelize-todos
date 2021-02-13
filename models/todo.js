module.exports = function(sequelize, DataTypes) {
    const todo = sequelize.define('todo', {
        text: DataTypes.STRING,
        complete: {
            type: DataTypes.BOOLEAN,
            default: false
        }
    })
    return todo
}