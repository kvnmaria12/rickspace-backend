const uploadRepo = require('../../repository/file-upload/file-upload.repo');

const upload = async (req) => {
  try {
    const uploadResponse = await uploadRepo(req);
  } catch (error) {
    return {
      error: error?.message,
    };
  }
};

module.exports = upload;
