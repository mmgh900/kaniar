export const minerals = [
  {
    id: 1,
    name: 'کوارتز',
    color: 'شفاف تا سفید',
    hardness: 7,
    crystalSystem: 'شش وجهی',
    cleavage: 'ندارد',
    fracture: 'صدفی',
    luster: 'شیشه‌ای',
    streak: 'سفید',
    specificGravity: '2.65',
    chemicalFormula: 'SiO2',
    image: './images/quartz.png',
    description: 'کوارتز یکی از فراوان‌ترین کانی‌های پوسته زمین است. این کانی در انواع مختلف سنگ‌ها یافت می‌شود و دارای کاربردهای متنوعی در صنعت و جواهرسازی است.'
  },
  {
    id: 2,
    name: 'کلسیت',
    color: 'سفید تا زرد',
    hardness: 3,
    crystalSystem: 'سه گوش',
    cleavage: 'کامل در سه جهت',
    fracture: 'ناهموار',
    luster: 'شیشه‌ای تا مرواریدی',
    streak: 'سفید',
    specificGravity: '2.71',
    chemicalFormula: 'CaCO3',
    image: './images/calcite.webp',  // Updated to local image path
    description: 'کلسیت یکی از کانی‌های اصلی تشکیل دهنده سنگ آهک است. این کانی در صنایع ساختمانی و شیمیایی کاربرد فراوانی دارد.'
  },
  {
    id: 3,
    name: 'پیریت',
    color: 'طلایی',
    hardness: 6,
    crystalSystem: 'مکعبی',
    cleavage: 'ندارد',
    fracture: 'ناهموار',
    luster: 'فلزی',
    streak: 'سیاه سبز',
    specificGravity: '5.02',
    chemicalFormula: 'FeS2',
    image: './images/pyrite.webp',  // Updated to local image path
    description: 'پیریت به دلیل ظاهر طلایی رنگش به "طلای احمق‌ها" معروف است. این کانی منبع مهمی برای تولید اسید سولفوریک است.'
  },
  {
    id: 4,
    name: 'مگنتیت',
    color: 'سیاه',
    hardness: 6,
    crystalSystem: 'مکعبی',
    cleavage: 'ندارد',
    fracture: 'ناهموار',
    luster: 'فلزی',
    streak: 'سیاه',
    specificGravity: '5.18',
    chemicalFormula: 'Fe3O4',
    image: './images/magnetite.webp',  // Updated to local image path
    description: 'مگنتیت یک کانی مغناطیسی است که به عنوان سنگ معدن آهن استخراج می‌شود. این کانی در صنایع فولادسازی اهمیت زیادی دارد.'
  },
  {
    id: 5,
    name: 'هماتیت',
    color: 'خاکستری تا قرمز',
    hardness: 5.5,
    crystalSystem: 'شش وجهی',
    cleavage: 'ندارد',
    fracture: 'ناهموار',
    luster: 'فلزی تا خاکی',
    streak: 'قرمز قهوه‌ای',
    specificGravity: '5.26',
    chemicalFormula: 'Fe2O3',
    image: './images/hematite.webp',  // Updated to local image path
    description: 'هماتیت یکی از مهم‌ترین سنگ‌های معدن آهن است. این کانی در ساخت رنگدانه‌های قرمز نیز کاربرد دارد.'
  },
  {
    id: 6,
    name: 'گالن',
    color: 'نقره‌ای خاکستری',
    hardness: 2.5,
    crystalSystem: 'مکعبی',
    cleavage: 'کامل در سه جهت',
    fracture: 'ناهموار',
    luster: 'فلزی',
    streak: 'خاکستری',
    specificGravity: '7.5',
    chemicalFormula: 'PbS',
    image: './images/galena.png',  // Updated to local image path
    description: 'گالن مهمترین سنگ معدن سرب است.'
  },
  {
    id: 7,
    name: 'اسفالریت',
    color: 'زرد تا قهوه‌ای',
    hardness: 3.5,
    crystalSystem: 'مکعبی',
    cleavage: 'کامل در شش جهت',
    fracture: 'ناهموار',
    luster: 'چرب',
    streak: 'قهوه‌ای',
    specificGravity: '4',
    chemicalFormula: 'ZnS',
    image: './images/sphalerite.webp',  // Updated to local image path
    description: 'اسفالریت مهمترین سنگ معدن روی است.'
  },
  {
    id: 8,
    name: 'باریت',
    color: 'سفید تا آبی روشن',
    hardness: 3,
    crystalSystem: 'ارتورومبیک',
    cleavage: 'کامل در سه جهت',
    fracture: 'ناهموار',
    luster: 'شیشه‌ای',
    streak: 'سفید',
    specificGravity: '4.5',
    chemicalFormula: 'BaSO4',
    image: './images/barite.png',  // Updated to local image path
    description: 'باریت در صنایع نفت و گاز کاربرد دارد.'
  },
  {
    id: 9,
    name: 'فلوریت',
    color: 'بنفش تا سبز',
    hardness: 4,
    crystalSystem: 'مکعبی',
    cleavage: 'کامل در چهار جهت',
    fracture: 'ناهموار',
    luster: 'شیشه‌ای',
    streak: 'سفید',
    specificGravity: '3.2',
    chemicalFormula: 'CaF2',
    image: './images/fluorite.png',  // Updated to local image path
    description: 'فلوریت در صنایع شیمیایی و متالورژی کاربرد دارد.'
  },
  {
    id: 10,
    name: 'مالاکیت',
    color: 'سبز',
    hardness: 3.5,
    crystalSystem: 'مونوکلینیک',
    cleavage: 'کامل در یک جهت',
    fracture: 'ناهموار',
    luster: 'چرب',
    streak: 'سبز روشن',
    specificGravity: '4',
    chemicalFormula: 'Cu2CO3(OH)2',
    image: './images/malachite.png',  // Updated to local image path
    description: 'مالاکیت یک کانی مس است که به عنوان سنگ زینتی استفاده می‌شود.'
  },
];
