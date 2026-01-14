import { VocabItem } from './types';

// Comprehensive list of household essentials likely found in the learning video context
export const INITIAL_VOCAB: VocabItem[] = [
  // Cleaning Tools
  { id: '1', english: 'Broom', burmese: 'တံမြက်စည်း', pronunciation_guide: 'bruːm', category: 'cleaning' },
  { id: '2', english: 'Dustpan', burmese: 'ဂေါ်ပြား (အမှိုက်ကော်ရန်)', pronunciation_guide: 'ˈdʌst.pæn', category: 'cleaning' },
  { id: '3', english: 'Mop', burmese: 'ကြမ်းတိုက်အဝတ် / ရေမြှုပ်တံမြက်စည်း', pronunciation_guide: 'mɒp', category: 'cleaning' },
  { id: '4', english: 'Bucket', burmese: 'ရေပုံး', pronunciation_guide: 'ˈbʌk.ɪt', category: 'cleaning' },
  { id: '5', english: 'Vacuum Cleaner', burmese: 'ဖုန်စုပ်စက်', pronunciation_guide: 'ˈvæk.juːm ˈkliː.nər', category: 'cleaning' },
  { id: '6', english: 'Sponge', burmese: 'ရေမြှုပ် (ပန်းကန်ဆေး/သန့်ရှင်းရေး)', pronunciation_guide: 'spʌndʒ', category: 'cleaning' },
  { id: '7', english: 'Rubber Gloves', burmese: 'လက်အိတ် (ရော်ဘာ)', pronunciation_guide: 'ˈrʌb.ər ɡlʌvz', category: 'cleaning' },
  { id: '8', english: 'Feather Duster', burmese: 'ကြက်မွေး (ဖုန်သုတ်တံ)', pronunciation_guide: 'ˈfeð.ər ˈdʌs.tər', category: 'cleaning' },
  { id: '9', english: 'Trash Can / Bin', burmese: 'အမှိုက်ပုံး', pronunciation_guide: 'træʃ kæn', category: 'cleaning' },
  { id: '10', english: 'Trash Bag', burmese: 'အမှိုက်အိတ်', pronunciation_guide: 'træʃ bæg', category: 'cleaning' },

  // Laundry
  { id: '11', english: 'Washing Machine', burmese: 'အဝတ်လျှော်စက်', pronunciation_guide: 'ˈwɒʃ.ɪŋ məˈʃiːn', category: 'laundry' },
  { id: '12', english: 'Laundry Basket', burmese: 'အဝတ်ထည့်ခြင်း', pronunciation_guide: 'ˈlɔːn.dri ˈbɑː.skɪt', category: 'laundry' },
  { id: '13', english: 'Detergent', burmese: 'ဆပ်ပြာမှုန့်', pronunciation_guide: 'dɪˈtɜː.dʒənt', category: 'laundry' },
  { id: '14', english: 'Bleach', burmese: 'အရောင်ချွတ်ဆေး / ဂျပ်ခဲရေ', pronunciation_guide: 'bliːtʃ', category: 'laundry' },
  { id: '15', english: 'Fabric Softener', burmese: 'အဝတ်ပျော့ဆေး / မွှေးဆေး', pronunciation_guide: 'ˈfæb.rɪk ˈsɒf.ən.ər', category: 'laundry' },
  { id: '16', english: 'Hanger', burmese: 'အင်္ကျီချိတ်', pronunciation_guide: 'ˈhæŋ.ər', category: 'laundry' },
  { id: '17', english: 'Clothespin / Peg', burmese: 'အဝတ်ညှပ်', pronunciation_guide: 'ˈkloʊðz.pɪn', category: 'laundry' },
  { id: '18', english: 'Clothesline', burmese: 'အဝတ်လှန်းကြိုး', pronunciation_guide: 'ˈkloʊðz.laɪn', category: 'laundry' },
  { id: '19', english: 'Iron', burmese: 'မီးပူ', pronunciation_guide: 'aɪərn', category: 'laundry' },
  { id: '20', english: 'Ironing Board', burmese: 'မီးပူတိုက် စားပွဲ', pronunciation_guide: 'ˈaɪə.nɪŋ bɔːd', category: 'laundry' },

  // Bathroom & Personal Care
  { id: '21', english: 'Toilet Brush', burmese: 'အိမ်သာခွက်ဆေး ဘရက်ရှ်', pronunciation_guide: 'ˈtɔɪ.lət brʌʃ', category: 'bathroom' },
  { id: '22', english: 'Plunger', burmese: 'အိမ်သာခွက်လေစုပ်တံ', pronunciation_guide: 'ˈplʌn.dʒər', category: 'bathroom' },
  { id: '23', english: 'Towel', burmese: 'မျက်နှာသုတ်ပဝါ / ရေချိုးပဝါ', pronunciation_guide: 'taʊəl', category: 'bathroom' },
  { id: '24', english: 'Soap', burmese: 'ဆပ်ပြာခဲ', pronunciation_guide: 'soʊp', category: 'bathroom' },

  // Kitchen Essentials
  { id: '25', english: 'Dishwashing Liquid', burmese: 'ပန်းကန်ဆေးဆပ်ပြာဆီ', pronunciation_guide: 'ˈdɪʃˌwɒʃ.ɪŋ ˈlɪk.wɪd', category: 'kitchen' },
  { id: '26', english: 'Paper Towel', burmese: 'စက္ကူလက်သုတ်ပဝါ', pronunciation_guide: 'ˈpeɪ.pər taʊəl', category: 'kitchen' },
  { id: '27', english: 'Scrub Brush', burmese: 'တိုက်ချွတ်ဆေးကြောသည့် ဘရက်ရှ်', pronunciation_guide: 'skrʌb brʌʃ', category: 'kitchen' },
];

export const TABS = [
  { id: 'household', label: 'Household Essentials' },
  { id: 'practice', label: 'Practice Mode' },
  { id: 'generator', label: 'AI Generator' }
];