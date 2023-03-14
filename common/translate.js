const { Translate } = require("@google-cloud/translate").v2;

// 프로젝트 ID와 인증 정보를 담은 JSON 파일 경로를 입력합니다.
const translate = new Translate({
  projectId: "everywisesaying",
  keyFilename: "AIzaSyCnWKsi09JS5Hq2l-41KIpbZ9Q4qVMzlLs",
});

// 번역할 텍스트와 번역할 언어 코드를 입력합니다.
async function translateText(text, target) {
  try {
    // 번역 API를 호출하여 번역 결과를 반환합니다.
    const [translation] = await translate.translate(text, target);
    return translation;
  } catch (error) {
    console.error(error);
  }
}

// 번역할 텍스트와 번역할 언어 코드를 입력합니다.
translateText("Hello, World!", "es")
  .then((translation) => {
    console.log(`Translated text: ${translation}`);
  })
  .catch((error) => {
    console.error(error);
  });
module.exports = {
  translateText,
};
