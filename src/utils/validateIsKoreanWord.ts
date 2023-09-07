export const validateIsKoreanWord = (word: string) => {
  const wordWithoutSpaces = word.replaceAll(' ', '');
  const koreanWordPattern = /^[가-힣]+$/g;

  return koreanWordPattern.test(wordWithoutSpaces);
};
