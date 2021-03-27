const { response, request } = require('express');
const Categoria = require('../models/categoria');


// OBTENER CATEGORIAS
const getCategorias = async (req = request, res = response) => {

    const categorias = await Categoria.findAll();

    if (categorias.length == 0) {
        return res.send({ mensaje: 'No hay data' });
    }

    res.send(categorias);


}

//CREAR CATEGORIA
const createCategoria = async (req = request, res = response) => {

    const newCategoria = await Categoria.create(req.body);
    res.send(newCategoria);

}

//OBTENER UNA CATEGORIA
const getCategoria = async (req = request, res = response) => {

    const user = await Categoria.findOne({
        where: {
            id: req.params.id
        }
    });

    if (!user) {
        return res.send({ mensaje: `Usuario no existe` });
    }

    res.send(user);

}

// ACTUALIZAR CATEGORIA
const updateCategoria = async (req = request, res = response) => {

    const categoria = await User.findByPk(req.params.id);

    if (!categoria) {
        return res.send({ mensaje: `Categoria no existe` });
    }

    await categoria.update({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion
    });

    res.send(categoria);

}

//ELIMINAR CATEGORIA
const deleteCategoria = async (req = request, res = response) => {

    const categoria = await Categoria.findByPk(req.params.id);

    if (!Categoria ) {
        return res.send({ mensaje: `Categoria no existe` });
    }

    await Categoria.destroy({
        where: {
            id: req.params.id
        }
    });

<<<<<<< HEAD
<<<<<<< HEAD
    res.send({codigoResultado:1 ,mensaje: `Categoria eliminada` });
=======
    res.send({ mensaje: `Categoria eliminado con exito` });
>>>>>>> b22e48c8e545297fcf8549d7b7e975162b9dcba8
=======
    res.send({ codigoResultado:1 ,mensaje: `Categoria eliminado con exito` });
>>>>>>> 4b4a7e5c38ce16dd5139a00090ac950d128ad0dc

}




module.exports = {
    getCategorias,
    getCategoria,
    createCategoria,
    updateCategoria,
    deleteCategoria
}