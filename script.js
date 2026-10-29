let memeObj = {
  topTier: [
    'Sigma Male',
    'Skibidi Toilet',
    'Let Him Cook',
    'Brat Summer',
    'Very Demure, Very Mindful',
    'Grimace Shake',
  ],
  classicTier: [
    'Chad & Virgin',
    'Karen',
    'NPC',
    'Wojak & Doomer',
    'Florida Man',
    'Rickroll',
  ],
  workTier: [
    'Quite Quitting',
    'We Live, We Love, We Lie (Smurf Cat)',
    'Girl Math / Boy Math',
    'Corporate Speak',
    'Delulu is the Solulu',
  ],
};

// 修改函数：直接传入整个 memeObj 对象
const randomlySelectMeme = (obj) => {
  const allMemes = [];

  // 1. 定义英文 Key 对应的中文维度名称
  const tierNames = {
    topTier: '当前统治级的顶级流行梗',
    classicTier: '经典永流传的常青藤梗',
    workTier: '职场与生活万能好用梗',
  };

  // 2. 将所有梗扁平化成一个包含“维度标签”的对象数组
  for (let key in obj) {
    obj[key].forEach((meme) => {
      allMemes.push({
        name: meme,
        tier: tierNames[key] || key, // 如果找不到中文名，就用默认的 key
      });
    });
  }

  // 3. 随机抽取
  const randomIndex = Math.floor(Math.random() * allMemes.length);
  return allMemes[randomIndex];
};

// 4. 调用并格式化输出
const result = randomlySelectMeme(memeObj);
console.log(`【${result.tier}】: ${result.name}`);
