const uploadService = require('../../services/upload/upload.services');

const upload = async (req, res) => {
  try {
    const uploadReponse = await uploadService(req);
    console.log('uploadResponse', uploadReponse);
    res.status(200).json({ message: 'Success' });
  } catch (error) {
    console.log('errro from upload controller', error);
    res.status(500).json({ message: error?.message });
  }
};

module.exports = upload;
