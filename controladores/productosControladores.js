import {
  insertapro,
  obtTodo,
  productosId,
  actualiza,
  actualizarStock,
} from "../modelos/productosModelo.js";
//eje6
export const insertaproducto = async (req, res) => {
  try {
    const producto = await insertapro(req.body);
    res.status(201).json(producto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//eje7
export const muestraProductos = async (req, res) => {
  try {
    const resultado = await obtTodo();
    res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//eje8
export const muestraproductosId = async (req, res) => {
  try {
    const resultado = await productosId(req.params.id);
    if(!resultado) {
      return  res.status(404).json({ error: "Producto no encontrado" });
    }
    res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//eje9
export const actualizaproducto = async (req, res) => {
  try {
    const resultado = await actualiza(req.params.id, req.body);
    res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//eje10
export const cambiarStock = async (req, res) => {
  const { id } = req.params;
  const { cantidad } = req.body;

  if (typeof cantidad !== "number" || cantidad === 0) {
    return res.status(400).json({
      error:
        "Debe enviar una cantidad numérica diferente de cero para sumar o restar al stock.",
    });
  }
  try {
    const resultado = await actualizarStock(id, cantidad);
    res.status(200).json({
      mensaje: `Stock del producto ${id} actualizado correctamente.`,
      ...resultado,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};