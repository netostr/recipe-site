import type {
  RecipeCardType,
  RecipeIngredient,
  RecipeStep,
} from "@/app/_lib/definitions";
import { IngredientUnits } from "@/app/_lib/definitions";

export const recipeDescriptionExamples: RecipeCardType[] = [
  {
    id: "7A8D4757-0249-4372-8FA2-B245C6438446",
    title: "Овсяное печенье с изюмом и кунжутом",
    description:
      "Печенье для тех, кто не любит возиться с тестом, и ждать его из духовки нужно ровно 15 минут. Орехи можно взять любые — например, кроме грецких добавить миндаль, тыквенные или подсолнечные семечки. И не игнорируйте лимонную цедру, с ней печенье так соблазнительно пахнет! Такого вы точно в магазине не купите. Подробный видеорецепт прилагается.",
    cook_time: "25",
    servings: 12,
    calories: "193",
    image_url: "/recipe-examples/ovsyanoe-pechene/title.jpeg",
    favorite: false,
  },
  {
    id: "18795A94-34A9-481C-ABBE-B1CC021E0820",
    title: "Борщ со свежими помидорами",
    description:
      "Положите мелко нарезанные свежие помидоры к традиционной зажарке из лука и моркови. Они пропитают и смягчат овощи своим соком, усилят характерную пикантность капусты и придадут борщу по-летнему освежающие нотки. Возьмите для бульона курицу, она добавит все необходимые питательные вещества и раскроет вкус овощей, не перебивая их. Свеклу достаточно натереть и обжарить, положив в борщ в самом конце. Она дойдет до готовности, пока блюдо настаивается, а бульон сохранит ее яркий цвет.",
    cook_time: "85",
    servings: 6,
    calories: "52",
    image_url: "/recipe-examples/borsch/title.jpeg",
    favorite: false,
  },
  {
    id: "37CA8D6E-FBBF-453F-9B2C-3F9E0CE1210E",
    title: "Шаурма по-домашнему",
    description:
      "Залог вкусной шаурмы — это соус, ведь именно от него зависит сочность блюда. Я добавляю в соус греческий йогурт и много овощей, чтобы сделать шаурму менее калорийной и более здоровой и питательной.",
    cook_time: "90",
    servings: 2,
    calories: "154",
    image_url: "/recipe-examples/shawarma/title.jpeg",
    favorite: false,
  },
];

export const recipeIngredientExamples: RecipeIngredient[] = [
  {
    id: "73720abc-120d-4571-befb-7970f18570d2",
    recipe_id: "7A8D4757-0249-4372-8FA2-B245C6438446",
    name: "Мед",
    amount: 50,
    unit: IngredientUnits.gram,
  },
  {
    id: "1f04b32a-194b-4dad-a3b0-232c1e935bdb",
    recipe_id: "7A8D4757-0249-4372-8FA2-B245C6438446",
    name: "Растительное масло",
    amount: 50,
    unit: IngredientUnits.milliliter,
  },
  {
    id: "a080121e-1adf-464b-960f-a6483052a2b6",
    recipe_id: "7A8D4757-0249-4372-8FA2-B245C6438446",
    name: "Лимон",
    amount: 1,
    unit: IngredientUnits.pieces,
  },
  {
    id: "be150e41-ba8e-43d1-9c8c-5840d85ec3ac",
    recipe_id: "7A8D4757-0249-4372-8FA2-B245C6438446",
    name: "Изюм",
    amount: 40,
    unit: IngredientUnits.gram,
  },
  {
    id: "ada2f840-b885-4e95-8aa1-dbc7e5ce9fc1",
    recipe_id: "7A8D4757-0249-4372-8FA2-B245C6438446",
    name: "Пшеничная мука",
    amount: 100,
    unit: IngredientUnits.gram,
  },
  {
    id: "144db682-9d86-4853-b5a8-2be43d48b16f",
    recipe_id: "7A8D4757-0249-4372-8FA2-B245C6438446",
    name: "Корица",
    amount: 0.3,
    unit: IngredientUnits.teaspoon,
  },
  {
    id: "cee4e9d9-c858-4163-84c8-a10fad27e09b",
    recipe_id: "7A8D4757-0249-4372-8FA2-B245C6438446",
    name: "Грецкие орехи",
    amount: 50,
    unit: IngredientUnits.gram,
  },
  {
    id: "e34f90b9-cd84-4448-8065-06f668c264c7",
    recipe_id: "7A8D4757-0249-4372-8FA2-B245C6438446",
    name: "Кунжутные семечки",
    amount: 30,
    unit: IngredientUnits.gram,
  },
  {
    id: "30299102-d02b-41cc-a168-950ab625b626",
    recipe_id: "7A8D4757-0249-4372-8FA2-B245C6438446",
    name: "Корень имбиря",
    amount: 10,
    unit: IngredientUnits.gram,
  },
  {
    id: "85544459-dce5-4b1f-8dc3-0cba896de8b5",
    recipe_id: "7A8D4757-0249-4372-8FA2-B245C6438446",
    name: "Овсяные хлопья",
    amount: 200,
    unit: IngredientUnits.gram,
  },

  {
    id: "282f0d7b-8e37-42d2-b28d-4b844382fe44",
    recipe_id: "18795A94-34A9-481C-ABBE-B1CC021E0820",
    name: "Молотый черный перец",
    unit: IngredientUnits.taste,
  },
  {
    id: "c5e502f7-2f95-4b0f-b7b3-0f273fbb7b79",
    recipe_id: "18795A94-34A9-481C-ABBE-B1CC021E0820",
    name: "Уксус",
    amount: 1,
    unit: IngredientUnits.teaspoon,
  },
  {
    id: "19334f96-751e-479e-b6f9-34d881b0f75e",
    recipe_id: "18795A94-34A9-481C-ABBE-B1CC021E0820",
    name: "Петрушка",
    amount: 1,
    unit: IngredientUnits.bunch,
  },
  {
    id: "89442fb3-f06d-4d6d-a6f0-80f2491d63de",
    recipe_id: "18795A94-34A9-481C-ABBE-B1CC021E0820",
    name: "Укроп",
    amount: 1,
    unit: IngredientUnits.bunch,
  },
  {
    id: "0560a31c-e00b-48f9-982f-3688be695483",
    recipe_id: "18795A94-34A9-481C-ABBE-B1CC021E0820",
    name: "Чеснок",
    amount: 1,
    unit: IngredientUnits.clove,
  },
  {
    id: "ab79f740-b423-4268-b202-5a0ff31f0b82",
    recipe_id: "18795A94-34A9-481C-ABBE-B1CC021E0820",
    name: "Картофель",
    amount: 4,
    unit: IngredientUnits.pieces,
  },
  {
    id: "7889ed51-6f4e-471c-8347-1b3bad0f9bc2",
    recipe_id: "18795A94-34A9-481C-ABBE-B1CC021E0820",
    name: "Свекла",
    amount: 1,
    unit: IngredientUnits.pieces,
  },
  {
    id: "d0656691-ff89-4fcf-8b32-9ff85f76dabb",
    recipe_id: "18795A94-34A9-481C-ABBE-B1CC021E0820",
    name: "Помидоры",
    amount: 1,
    unit: IngredientUnits.pieces,
  },
  {
    id: "6565c691-b0a0-42b8-9e3d-99c3f66bc51f",
    recipe_id: "18795A94-34A9-481C-ABBE-B1CC021E0820",
    name: "Морковь",
    amount: 2,
    unit: IngredientUnits.pieces,
  },
  {
    id: "5f862e76-8b5d-4476-bf53-21c436eb769c",
    recipe_id: "18795A94-34A9-481C-ABBE-B1CC021E0820",
    name: "Лавровый лист",
    unit: IngredientUnits.taste,
  },
  {
    id: "9a2165c7-123c-480c-ad2c-f08da36eb0c5",
    recipe_id: "18795A94-34A9-481C-ABBE-B1CC021E0820",
    name: "Молотый красный перец",
    unit: IngredientUnits.taste,
  },
  {
    id: "9f759c9d-b5d7-4373-9111-e503b9a9fb82",
    recipe_id: "18795A94-34A9-481C-ABBE-B1CC021E0820",
    name: "Мясо",
    amount: 600,
    unit: IngredientUnits.gram,
  },
  {
    id: "53d27aa0-7dc1-443e-a161-9638ff4f3f71",
    recipe_id: "18795A94-34A9-481C-ABBE-B1CC021E0820",
    name: "Капуста",
    amount: 1,
    unit: IngredientUnits.pieces,
  },
  {
    id: "072efccc-90e0-4cde-b5e4-f9334213b781",
    recipe_id: "18795A94-34A9-481C-ABBE-B1CC021E0820",
    name: "Лук",
    amount: 1,
    unit: IngredientUnits.pieces,
  },

  {
    id: "3f25c1fe-3223-4db5-915d-f6feab68d349",
    recipe_id: "37CA8D6E-FBBF-453F-9B2C-3F9E0CE1210E",
    name: "Куриная грудка",
    amount: 800,
    unit: IngredientUnits.gram,
  },
  {
    id: "00c61e7b-86a4-4546-942a-71464683a6e5",
    recipe_id: "37CA8D6E-FBBF-453F-9B2C-3F9E0CE1210E",
    name: "Оливковое масло",
    amount: 3,
    unit: IngredientUnits.tablespoon,
  },
  {
    id: "8b3e696d-b2fb-4407-ac46-a394d608a184",
    recipe_id: "37CA8D6E-FBBF-453F-9B2C-3F9E0CE1210E",
    name: "Паприка",
    amount: 1,
    unit: IngredientUnits.teaspoon,
  },
  {
    id: "1737d4e4-f76a-4ce1-b35f-c94dcb6b56ad",
    recipe_id: "37CA8D6E-FBBF-453F-9B2C-3F9E0CE1210E",
    name: "Армянский лаваш",
    amount: 2,
    unit: IngredientUnits.pieces,
  },
  {
    id: "36f4cf6c-3abe-4f64-98cc-277e58d935a0",
    recipe_id: "37CA8D6E-FBBF-453F-9B2C-3F9E0CE1210E",
    name: "Чеснок",
    amount: 3,
    unit: IngredientUnits.clove,
  },
  {
    id: "195a0e30-2a6a-471c-a632-4d72043d2e92",
    recipe_id: "37CA8D6E-FBBF-453F-9B2C-3F9E0CE1210E",
    name: "Помидор",
    amount: 180,
    unit: IngredientUnits.gram,
  },
  {
    id: "81f51d04-fe80-4d86-8b73-abf6a68ddd2f",
    recipe_id: "37CA8D6E-FBBF-453F-9B2C-3F9E0CE1210E",
    name: "Огурец",
    amount: 240,
    unit: IngredientUnits.gram,
  },
  {
    id: "0eab3893-92eb-406c-9166-7822d3607752",
    recipe_id: "37CA8D6E-FBBF-453F-9B2C-3F9E0CE1210E",
    name: "Репчатый лук",
    amount: 80,
    unit: IngredientUnits.gram,
  },
  {
    id: "b6975e91-52bf-4e53-8dcf-f57c24bdb721",
    recipe_id: "37CA8D6E-FBBF-453F-9B2C-3F9E0CE1210E",
    name: "Майонез",
    amount: 4,
    unit: IngredientUnits.tablespoon,
  },
  {
    id: "1e4415de-d629-4de7-8098-a38dabb0585d",
    recipe_id: "37CA8D6E-FBBF-453F-9B2C-3F9E0CE1210E",
    name: "Греческий йогурт",
    amount: 4,
    unit: IngredientUnits.tablespoon,
  },
  {
    id: "1778332b-20d2-4d54-b0dc-dd9671639750",
    recipe_id: "37CA8D6E-FBBF-453F-9B2C-3F9E0CE1210E",
    name: "Лимонный сок",
    amount: 1,
    unit: IngredientUnits.tablespoon,
  },
  {
    id: "86faa409-57e6-4281-a562-c9d3d1fe1a23",
    recipe_id: "37CA8D6E-FBBF-453F-9B2C-3F9E0CE1210E",
    name: "Соль",
    unit: IngredientUnits.taste,
  },
];

export const recipeStepExamples: RecipeStep[] = [
  {
    id: "e416cca5-3d78-4094-bfb7-e71d147afbf0",
    recipe_id: "7A8D4757-0249-4372-8FA2-B245C6438446",
    num_step: 1,
    description:
      "Разогреть духовку до 180 градусов. Изюм и грецкие орехи мелко порубить.",
    image_url: "/recipe-examples/ovsyanoe-pechene/ovsyanoe-pechene_step_1.webp",
  },
  {
    id: "d8bf7d90-ab4a-4bad-b151-8e1c71ca6280",
    recipe_id: "7A8D4757-0249-4372-8FA2-B245C6438446",
    num_step: 2,
    description: "Имбирь натереть на мелкой терке.",
    image_url: "/recipe-examples/ovsyanoe-pechene/ovsyanoe-pechene_step_2.webp",
  },
  {
    id: "f171a8b5-89ff-4477-9d58-a372f734251b",
    recipe_id: "7A8D4757-0249-4372-8FA2-B245C6438446",
    num_step: 3,
    description:
      "В небольшом ковшике подогреть сок одного лимона, цедру половины лимона, мед, корицу и натертый имбирь.",
    image_url: "/recipe-examples/ovsyanoe-pechene/ovsyanoe-pechene_step_3.webp",
  },
  {
    id: "6f6f09b2-9173-4f82-b5c2-c3c291ff8da7",
    recipe_id: "7A8D4757-0249-4372-8FA2-B245C6438446",
    num_step: 4,
    description:
      "В миску насыпать овсянку, орехи, изюм, кунжут, добавить растительное масло, муку и подогретый сироп из меда, лимонного сока и специй. Замесить тесто. Овсянку лучше брать самую мелкую, «Экстра» — ту, что варить надо минуты три, не дольше.",
    image_url: "/recipe-examples/ovsyanoe-pechene/ovsyanoe-pechene_step_4.webp",
  },
  {
    id: "b47179e3-d6d6-4307-89cc-0ed2915a42a4",
    recipe_id: "7A8D4757-0249-4372-8FA2-B245C6438446",
    num_step: 5,
    description:
      "Затем столовой ложкой или руками сформировать печенья и уложить на противень, предварительно проложив его бумагой для запекания.",
    image_url: "/recipe-examples/ovsyanoe-pechene/ovsyanoe-pechene_step_5.webp",
  },
  {
    id: "83823876-a258-46fa-aa3b-ca813db518c7",
    recipe_id: "7A8D4757-0249-4372-8FA2-B245C6438446",
    num_step: 6,
    description:
      "Выпекать примерно пятнадцать минут. Перед подачей дать печеньям остыть и подсохнуть.",
    image_url: "/recipe-examples/ovsyanoe-pechene/ovsyanoe-pechene_step_6.webp",
  },

  {
    id: "4dd65044-54e2-45ab-b440-3ccf7f791100",
    recipe_id: "18795A94-34A9-481C-ABBE-B1CC021E0820",
    num_step: 1,
    description:
      "Мясо нарезать небольшими кубиками, поставить кастрюлю с водой и мясом на огонь.",
  },
  {
    id: "edd1402b-29d3-49b5-a47e-6b498d5a0f80",
    recipe_id: "18795A94-34A9-481C-ABBE-B1CC021E0820",
    num_step: 2,
    description: "Капусту помыть, нарезать соломкой.",
  },
  {
    id: "e11f0ba3-b993-4647-97da-99a18f1552fb",
    recipe_id: "18795A94-34A9-481C-ABBE-B1CC021E0820",
    num_step: 3,
    description: "Картофель помыть, почистить и нарезать большими кубиками.",
  },
  {
    id: "66e81499-914b-4ed5-ad93-199e4b9b5f11",
    recipe_id: "18795A94-34A9-481C-ABBE-B1CC021E0820",
    num_step: 4,
    description:
      "Когда в кастрюле с мясом появится пенка, выловить из кастрюли мясо и вылить бульон. Вымыть кастрюлю от оставшейся пенки, налить в нее воды, поставить на огонь.",
  },
  {
    id: "44c5009c-2478-4b7c-a5dd-2b37b1be5ed3",
    recipe_id: "18795A94-34A9-481C-ABBE-B1CC021E0820",
    num_step: 5,
    description:
      "Если вода в кастрюле закипела, то вымыть мясо и добавить в кастрюлю.",
  },
  {
    id: "01755ac3-5528-4d91-8b12-e47b5c6b4d98",
    recipe_id: "18795A94-34A9-481C-ABBE-B1CC021E0820",
    num_step: 6,
    description: "Лук нарезать полукольцами.",
  },
  {
    id: "711555e0-75bf-4a5b-b895-217367c23546",
    recipe_id: "18795A94-34A9-481C-ABBE-B1CC021E0820",
    num_step: 7,
    description: "Морковь помыть, почистить, натереть на крупной терке.",
  },
  {
    id: "fd74a6c3-3593-413e-8c69-41236cefb504",
    recipe_id: "18795A94-34A9-481C-ABBE-B1CC021E0820",
    num_step: 8,
    description: "Свеклу помыть, почистить, натереть на крупной терке.",
  },
  {
    id: "3141b7da-3e1a-4d16-a6ad-fb7f5f4a44ec",
    recipe_id: "18795A94-34A9-481C-ABBE-B1CC021E0820",
    num_step: 9,
    description:
      "Натертую свеклу положить в разогретую сковороду с растительным маслом. Немного пожарить, налить 2 стакана бульона из кастрюли. Добавить чайную ложечку уксуса. Тушить пятнадцать-двадцать минут, периодически помешивая.",
  },
  {
    id: "88d9b0ee-8ddb-4fd2-bf69-8102536deb16",
    recipe_id: "18795A94-34A9-481C-ABBE-B1CC021E0820",
    num_step: 10,
    description:
      "В кастрюлю добавить подготовленный картофель, через пять минут добавить капусту.",
  },
  {
    id: "4cae6293-c87c-4cf0-bb64-b029b9619a94",
    recipe_id: "18795A94-34A9-481C-ABBE-B1CC021E0820",
    num_step: 11,
    description:
      "Разогреть сковороду с растительным маслом, пожарить лук, потом добавить морковь, немного пожарить. Налить стакан горячей воды. Тушить пять минут.",
  },
  {
    id: "b183905e-3ccd-40f3-a430-78028a3f6489",
    recipe_id: "18795A94-34A9-481C-ABBE-B1CC021E0820",
    num_step: 12,
    description:
      "Тушеную свеклу положить в кастрюлю, потом овощи. Добавить специи (лавровый лист, черный молотый перец, острый молотый перец чили, соль) по вкусу.",
  },
  {
    id: "096f1396-a31f-4786-9d6d-89a8a5a772bb",
    recipe_id: "18795A94-34A9-481C-ABBE-B1CC021E0820",
    num_step: 13,
    description: "Зубчик чеснока натереть на мелкой терке в кастрюлю.",
  },
  {
    id: "2767aba9-2e52-479b-ba66-755a34569f89",
    recipe_id: "18795A94-34A9-481C-ABBE-B1CC021E0820",
    num_step: 14,
    description: "Нарезать помидор дольками, добавить в кастрюлю.",
  },
  {
    id: "a84be740-b4c9-431a-b781-691477f5c66d",
    recipe_id: "18795A94-34A9-481C-ABBE-B1CC021E0820",
    num_step: 15,
    description: "Нашинковать зелень.",
  },
  {
    id: "0d7b24de-5db7-4765-af93-69413656fede",
    recipe_id: "18795A94-34A9-481C-ABBE-B1CC021E0820",
    num_step: 16,
    description:
      "Когда борщ будет готов, выключить огонь и дать настояться десять-пятнадцать минут.",
  },
  {
    id: "d6d323d1-d4bd-4b53-a22c-f0dbfeceb541",
    recipe_id: "18795A94-34A9-481C-ABBE-B1CC021E0820",
    num_step: 17,
    description:
      "Разлить по тарелкам, полить сметаной и посыпать рубленой зеленью.",
  },

  {
    id: "93773aed-d300-4d96-a814-2fdd7840a351",
    recipe_id: "37CA8D6E-FBBF-453F-9B2C-3F9E0CE1210E",
    num_step: 1,
    description:
      "Мелко нашинкуйте чеснок и поделите его на две части: одна понадобится для маринада, вторая — для соуса. В миске смешайте оливковое масло, измельченный чеснок, паприку, соль и перец. Хорошо перемешайте, чтобы получился маринад. Тонко нарежьте курицу, добавьте ее в маринад, перемешайте и оставьте в холодильнике на 40–60 минут.",
    image_url: "/recipe-examples/shawarma/shawarma_step_1.webp",
  },
  {
    id: "41c579e0-aa48-4792-a016-6b86368ff4e0",
    recipe_id: "37CA8D6E-FBBF-453F-9B2C-3F9E0CE1210E",
    num_step: 2,
    description:
      "В другой миске приготовьте соус: смешайте майонез, греческий йогурт, чеснок, лимонный сок и соль. Добавьте приправы по вкусу.",
    image_url: "/recipe-examples/shawarma/shawarma_step_2.webp",
  },
  {
    id: "22ddf248-dcfe-4e0f-88ff-989ced26ce2c",
    recipe_id: "37CA8D6E-FBBF-453F-9B2C-3F9E0CE1210E",
    num_step: 3,
    description:
      "Разогрейте гриль или сковороду на среднем огне. Готовьте мясо, периодически переворачивая, пока оно полностью не прожарится и не подрумянится — на это уйдет 5–7 минут. Снимите готовую курицу с огня и отложите ее в сторону.",
    image_url: "/recipe-examples/shawarma/shawarma_step_3.webp",
  },
  {
    id: "89e0e9ea-bc2f-4a8c-9038-a41d65b7cddf",
    recipe_id: "37CA8D6E-FBBF-453F-9B2C-3F9E0CE1210E",
    num_step: 4,
    description:
      "Нарежьте помидоры, огурцы и лук тонкой соломкой. Разогрейте лаваш на сухой сковороде или на гриле в течение 30 секунд с каждой стороны. Намажьте соус на лаваш, а затем выложите на него овощи и курицу.",
    image_url: "/recipe-examples/shawarma/shawarma_step_4.webp",
  },
];
