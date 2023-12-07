const uploadService = require('../../../services/AWS-Services/file-upload/file-upload.services');

const upload = async (req, res) => {
  try {
    const uploadReponse = await uploadService(req);
    console.log('uploadResponse', uploadReponse);
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
