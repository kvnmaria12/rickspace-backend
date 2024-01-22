const prisma = require('../../utils/prisma-client');

exports.loginRepo = async (req) => {
  const requestBody = req.body;
  const { userInfo } = requestBody;
  try {
    let responseData = {};
    const findEmailAndMobile = await prisma.user.findMany({
      where: {
        OR: [
          {
            email: userInfo,
          },
          {
            mobileNo: userInfo,
          },
        ],
      },
      include: {
        following: true,
      },
    });

    const { following } = findEmailAndMobile[0];

    let listOfFollowersId;

    listOfFollowersId = following.map((follower) => follower.followerId);

    const followersPost = await prisma.post.findMany({
      where: {
        authorId: { in: listOfFollowersId },
      },
    });

    await prisma.$disconnect();

    if (findEmailAndMobile.length <= 0) {
      return 'No_user_found';
    } else {
      responseData.results = findEmailAndMobile;
      responseData.followersPost = followersPost;
      return responseData;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};
