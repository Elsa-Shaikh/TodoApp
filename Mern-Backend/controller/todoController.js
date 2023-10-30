const Todo = require('../model/Todo')

exports.addTodo = async(req,res)=>{
  try {
    const newTodo = await Todo.create({
        data: req.body.data,
        createdAt:Date.now()
      })
      await newTodo.save();
     return res.status(200).json(newTodo)
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

exports.getAllTodo = async(req,res)=>{
    try {
        const todos = await Todo.find({}).sort({'createdAt':-1})
        return res.status(200).json(todos)
      } catch (error) {
        return res.status(500).json(error.message);
      }    
}

exports.doneTodo = async(req,res)=>{
  try {
    const todoRef = await Todo.findById(req.params.id);
    const todoDone = await Todo.findOneAndUpdate(
      {_id:req.params.id},
      {done:!todoRef.done}
      )
    await todoDone.save();

      return res.status(200).json(todoDone)
    } catch (error) {
      return res.status(500).json(error.message);
    }    
}

exports.updateTodo = async(req,res)=>{
  try {
    await Todo.findOneAndUpdate(
      {_id:req.params.id},
      {data:req.body.data}
      )
    const updateTodo = await Todo.findById(req.params.id);

      return res.status(200).json(updateTodo);

    } catch (error) {
      return res.status(500).json(error.message);
    }    
}

exports.deleteTodo = async(req,res)=>{
  try {
    const deleteTodo = await Todo.findByIdAndDelete(req.params.id)
      return res.status(200).json(deleteTodo);
      
    } catch (error) {
      return res.status(500).json(error.message);
    }    
}
