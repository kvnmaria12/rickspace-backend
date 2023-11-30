const uploadRepo = require('../../repository/upload/upload.repo');

const upload = async (req) => {
  try {
    const uploadResponse = await uploadRepo(req);
    if (uploadResponse) {
      return uploadResponse;
    } else {
      return {
        message: 'Issue in Upload Repo',
      };
    }
  } catch (error) {
    return {
      error: error?.message,
    };
  }
};

module.exports = upload;
