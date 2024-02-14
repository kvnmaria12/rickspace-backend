const uploadService = require('../../services/file-upload/file-upload.services');

const upload = async (req, res) => {
  try {
    if (req.file == undefined || req.file == '') {
      return res.status(400).json({ messge: 'File is missing' });
    }
    const { id, title, description, authorName } = req.body;

    if (id == undefined || id == '') {
      return res.status(400).json({ message: 'id is required' });
    } else if (title == undefined || title == '') {
      return res.status(400).json({ message: 'title is required' });
    } else if (description == undefined || description == '') {
      return res.status(400).json({ message: 'description is required' });
    } else if (authorName == undefined || authorName == '') {
      return res.status(400).json({ message: 'authorName is required' });
    }
    const uploadReponse = await uploadService(req);
    if (uploadReponse && uploadReponse?.code !== 400) {
      res.status(200).json(uploadReponse);
    } else if (uploadReponse?.code == 400) {
      res.status(404).json(uploadReponse);
    }
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

module.exports = upload;
