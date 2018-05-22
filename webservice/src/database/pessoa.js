const pessoa = deps => {
    return {
        all: () => {
            return new Promise((resolve, reject) => {
                const {connection, errorHandler} = deps;
                connection.query('SELECT * FROM pessoas', (error, results) => {
                    if(error) {
                        errorHandler(error, 'Falha ao listar as pessoas cadastradas', reject);
                        return false;
                    }
                    resolve({pessoas: results});
                });
            });
        },
        
        save: (umaPessoa) => {
            return new Promise((resolve, reject) => {
                const{connection, errorHandler} = deps;
                connection.query('INSERT INTO pessoas (nome, idade, cpf, rg, sexo) VALUES ?', [umaPessoa], (error, results) => {
                    if(error) {
                        errorHandler(error, 'Falha ao cadastrar a pessoa');
                        return false;
                    }
                    resolve({pessoa: {id: results.insertId}})
                })
            });
        },
        
        update: (id, umaPessoa) => {

        },
        
        delete: (id) => {
            return new Promise((resolve, reject) => {
                const{connection, errorHandler} = deps;
                connection.query('DELETE FROM pessoas WHERE id = ?', [id], (error, results) => {
                    if(error) {
                        errorHandler(error, 'Falha ao deletar a pessoa.');
                        return false;
                    }

                    resolve({message: "Pessoa removida com sucesso"});
                })
            })
        }
    }
}

module.exports = pessoa; 