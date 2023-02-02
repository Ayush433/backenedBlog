

const data = [
  {
    "id": '1',
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  },
  {
    "id": '2',
    "title": "qui est esse",
  },
  {
    "id": '3',
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
  },
  {
    "id": '4',
    "title": "eum et est occaecati",
  },
];






module.exports.getData = (req, res) => {
  return res.status(200).json(data);
}

module.exports.getDataById = (req, res) => {
  const { id } = req.params;
  const dataById = data.find((d) => d.id == id);
  return res.status(200).json(dataById);
}