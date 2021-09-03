import Sequelize, { Model } from "sequelize";

class File extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            paht: Sequelize.STRING,
            url: {
                type: Sequelize.VIRTUAL, //Campo virtual
                get() {
                    return `http://localhost:3000/files/${this.path}`
                }
            }
        }, {
            sequelize
        });

    }