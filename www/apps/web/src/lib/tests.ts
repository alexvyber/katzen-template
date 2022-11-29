export default {
  tests: [
    {
      name: "Верстка Макета ",
      description: "Копируйте любые символы с легкостью на любом устройстве!",
      link: {
        href: "https://getchar.alexeycontent.space/",
        label: "getchar.alexeycontent.space",
      },
      imageSrc: "/images/test-images/test-one.jpg",
    },
    // {
    //   name: 'PS+Shop',
    //   description:
    //     'Место, где можно купить подписки и игры для PS даже в очень сложные времена...',
    //   link: { href: 'https://psplus.shop/', label: 'psplus.shop' },
    //   imageSrc: '/images/test-images/test-one.jpg',
    // },
    // {
    //   name: 'Клуб Переговорщиков',
    //   description: 'Для тех, кто хочет вести переговоры более эффекктивно!',
    //   link: {
    //     href: 'https://negotiation.alexeycontent.space/',
    //     label: 'negotiation.alexeycontent.space',
    //   },
    //   imageSrc: '/images/test-images/test-one.jpg',
    // },
  ],
  getAllTests: function () {
    return this.tests
  },
}
