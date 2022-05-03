const Tour = require('./../model/tourModel');

const getToursAll = async (req, res) => {
  try {
    const data = await Tour.find();

    res.status(200).json({
      status: 'Success',
      results: data.length,
      data: data,
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
    });
  }
};
const addTour = async (req, res) => {
  //   const tourModel=new Tour({
  //     name:"salom",
  //     age:20
  //   })
  //   const date= await tourModel.save()
  // console.log(date);

  try {
    const data = await Tour.create(req.body);

    res.status(200).json({
      status: 'success',
      data: data,
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
    });
  }
};

const getTourItem = async (req, res) => {
  try {
    const data = await Tour.findById(req.params.id);
    res.status(200).json({
      status: 'success',

      data: data,
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed id',
    });
  }
};

const updateTour = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Tour.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'succes',
      data: data,
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: 'malumot ozgarmadi',
    });
  }
};

const deleteTour = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Tour.findByIdAndDelete(id);
    res.status(200).json({
      status: 'succes',
      data: data,
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
    });
  }
};

module.exports = { getToursAll, addTour, updateTour, deleteTour, getTourItem };
