var allProducts = [
  // КОЛЬЦА (20 штук)
  { id: 1, category: 'Кольца', brand: 'Diamond Row', title: 'Кольцо с бриллиантом', article: 'DR-R-001', material: 'Золото', probe: '585', weight: '3.2', size: '17', price: 45000, oldPrice: 65000, image: './images/rings.jpg', stock: 5 },
  { id: 2, category: 'Кольца', brand: 'Академия Бриллиантов', title: 'Помолвочное кольцо классика', article: 'AB-R-002', material: 'Белое золото', probe: '585', weight: '2.8', size: '16', price: 52000, oldPrice: 75000, image: './images/rings.jpg', stock: 3 },
  { id: 3, category: 'Кольца', brand: 'BASTET', title: 'Кольцо с изумрудом', article: 'BT-R-003', material: 'Золото', probe: '750', weight: '4.1', size: '18', price: 38000, oldPrice: 55000, image: './images/rings.jpg', stock: 7 },
  { id: 4, category: 'Кольца', brand: 'Бренды Италии', title: 'Обручальное кольцо тонкое', article: 'IT-R-004', material: 'Розовое золото', probe: '585', weight: '2.1', size: '17', price: 25000, oldPrice: 35000, image: './images/rings.jpg', stock: 10 },
  { id: 5, category: 'Кольца', brand: 'Yakutia Selection', title: 'Кольцо с якутским бриллиантом', article: 'YS-R-005', material: 'Платина', probe: '950', weight: '5.2', size: '19', price: 85000, oldPrice: 120000, image: './images/rings.jpg', stock: 2 },
  { id: 6, category: 'Кольца', brand: 'Diamond Row', title: 'Кольцо с сапфиром', article: 'DR-R-006', material: 'Золото', probe: '585', weight: '3.5', size: '16', price: 42000, oldPrice: 60000, image: './images/rings.jpg', stock: 6 },
  { id: 7, category: 'Кольца', brand: 'Академия Бриллиантов', title: 'Кольцо печатка', article: 'AB-R-007', material: 'Золото', probe: '585', weight: '6.8', size: '20', price: 35000, oldPrice: 48000, image: './images/rings.jpg', stock: 4 },
  { id: 8, category: 'Кольца', brand: 'BASTET', title: 'Кольцо с фианитами', article: 'BT-R-008', material: 'Серебро', probe: '925', weight: '2.3', size: '17', price: 8500, oldPrice: 12000, image: './images/rings.jpg', stock: 15 },
  { id: 9, category: 'Кольца', brand: 'Бренды Италии', title: 'Кольцо дорожка', article: 'IT-R-009', material: 'Белое золото', probe: '585', weight: '3.9', size: '18', price: 55000, oldPrice: 78000, image: './images/rings.jpg', stock: 5 },
  { id: 10, category: 'Кольца', brand: 'Yakutia Selection', title: 'Кольцо с россыпью бриллиантов', article: 'YS-R-010', material: 'Золото', probe: '750', weight: '4.5', size: '17', price: 92000, oldPrice: 130000, image: './images/rings.jpg', stock: 3 },
  { id: 11, category: 'Кольца', brand: 'Diamond Row', title: 'Кольцо минимализм', article: 'DR-R-011', material: 'Золото', probe: '585', weight: '1.8', size: '16', price: 18000, oldPrice: 25000, image: './images/rings.jpg', stock: 12 },
  { id: 12, category: 'Кольца', brand: 'Академия Бриллиантов', title: 'Кольцо с рубином', article: 'AB-R-012', material: 'Золото', probe: '585', weight: '3.6', size: '17', price: 48000, oldPrice: 68000, image: './images/rings.jpg', stock: 4 },
  { id: 13, category: 'Кольца', brand: 'BASTET', title: 'Кольцо геометрия', article: 'BT-R-013', material: 'Розовое золото', probe: '585', weight: '2.9', size: '18', price: 32000, oldPrice: 45000, image: './images/rings.jpg', stock: 8 },
  { id: 14, category: 'Кольца', brand: 'Бренды Италии', title: 'Кольцо винтаж', article: 'IT-R-014', material: 'Золото', probe: '585', weight: '4.2', size: '17', price: 39000, oldPrice: 55000, image: './images/rings.jpg', stock: 5 },
  { id: 15, category: 'Кольца', brand: 'Yakutia Selection', title: 'Кольцо солитер', article: 'YS-R-015', material: 'Белое золото', probe: '750', weight: '3.1', size: '16', price: 78000, oldPrice: 110000, image: './images/rings.jpg', stock: 3 },
  { id: 16, category: 'Кольца', brand: 'Diamond Row', title: 'Кольцо с аквамарином', article: 'DR-R-016', material: 'Золото', probe: '585', weight: '3.4', size: '18', price: 36000, oldPrice: 50000, image: './images/rings.jpg', stock: 6 },
  { id: 17, category: 'Кольца', brand: 'Академия Бриллиантов', title: 'Кольцо корона', article: 'AB-R-017', material: 'Золото', probe: '585', weight: '3.8', size: '17', price: 44000, oldPrice: 62000, image: './images/rings.jpg', stock: 5 },
  { id: 18, category: 'Кольца', brand: 'BASTET', title: 'Кольцо с топазом', article: 'BT-R-018', material: 'Серебро', probe: '925', weight: '2.5', size: '16', price: 9500, oldPrice: 14000, image: './images/rings.jpg', stock: 14 },
  { id: 19, category: 'Кольца', brand: 'Бренды Италии', title: 'Кольцо цветок', article: 'IT-R-019', material: 'Розовое золото', probe: '585', weight: '3.3', size: '17', price: 41000, oldPrice: 58000, image: './images/rings.jpg', stock: 7 },
  { id: 20, category: 'Кольца', brand: 'Yakutia Selection', title: 'Кольцо премиум якутский алмаз', article: 'YS-R-020', material: 'Платина', probe: '950', weight: '4.9', size: '18', price: 125000, oldPrice: 180000, image: './images/rings.jpg', stock: 1 },

  // СЕРЬГИ (20 штук)
  { id: 21, category: 'Серьги', brand: 'Diamond Row', title: 'Серьги пусеты с бриллиантами', article: 'DR-E-021', material: 'Золото', probe: '585', weight: '2.4', size: '8', price: 38000, oldPrice: 55000, image: './images/earrings.jpg', stock: 8 },
  { id: 22, category: 'Серьги', brand: 'Академия Бриллиантов', title: 'Длинные серьги с подвесками', article: 'AB-E-022', material: 'Белое золото', probe: '585', weight: '4.6', size: '45', price: 52000, oldPrice: 75000, image: './images/earrings.jpg', stock: 5 },
  { id: 23, category: 'Серьги', brand: 'BASTET', title: 'Серьги кольца', article: 'BT-E-023', material: 'Золото', probe: '585', weight: '3.2', size: '25', price: 28000, oldPrice: 40000, image: './images/earrings.jpg', stock: 10 },
  { id: 24, category: 'Серьги', brand: 'Бренды Италии', title: 'Серьги классика', article: 'IT-E-024', material: 'Золото', probe: '585', weight: '2.8', size: '12', price: 24000, oldPrice: 35000, image: './images/earrings.jpg', stock: 12 },
  { id: 25, category: 'Серьги', brand: 'Yakutia Selection', title: 'Серьги с якутскими бриллиантами', article: 'YS-E-025', material: 'Платина', probe: '950', weight: '5.1', size: '15', price: 95000, oldPrice: 135000, image: './images/earrings.jpg', stock: 3 },
  { id: 26, category: 'Серьги', brand: 'Diamond Row', title: 'Серьги гвоздики', article: 'DR-E-026', material: 'Золото', probe: '585', weight: '1.8', size: '6', price: 18000, oldPrice: 26000, image: './images/earrings.jpg', stock: 15 },
  { id: 27, category: 'Серьги', brand: 'Академия Бриллиантов', title: 'Серьги с изумрудами', article: 'AB-E-027', material: 'Золото', probe: '750', weight: '4.2', size: '20', price: 68000, oldPrice: 95000, image: './images/earrings.jpg', stock: 4 },
  { id: 28, category: 'Серьги', brand: 'BASTET', title: 'Серьги с фианитами', article: 'BT-E-028', material: 'Серебро', probe: '925', weight: '2.1', size: '18', price: 7500, oldPrice: 11000, image: './images/earrings.jpg', stock: 18 },
  { id: 29, category: 'Серьги', brand: 'Бренды Италии', title: 'Серьги капли', article: 'IT-E-029', material: 'Розовое золото', probe: '585', weight: '3.5', size: '30', price: 42000, oldPrice: 60000, image: './images/earrings.jpg', stock: 6 },
  { id: 30, category: 'Серьги', brand: 'Yakutia Selection', title: 'Серьги роскошь', article: 'YS-E-030', material: 'Золото', probe: '750', weight: '6.3', size: '35', price: 112000, oldPrice: 160000, image: './images/earrings.jpg', stock: 2 },
  { id: 31, category: 'Серьги', brand: 'Diamond Row', title: 'Серьги минимализм', article: 'DR-E-031', material: 'Золото', probe: '585', weight: '1.5', size: '10', price: 15000, oldPrice: 22000, image: './images/earrings.jpg', stock: 14 },
  { id: 32, category: 'Серьги', brand: 'Académия Бриллиантов', title: 'Серьги с сапфирами', article: 'AB-E-032', material: 'Белое золото', probe: '585', weight: '3.9', size: '22', price: 58000, oldPrice: 82000, image: './images/earrings.jpg', stock: 5 },
  { id: 33, category: 'Серьги', brand: 'BASTET', title: 'Серьги геометрия', article: 'BT-E-033', material: 'Золото', probe: '585', weight: '2.6', size: '15', price: 26000, oldPrice: 38000, image: './images/earrings.jpg', stock: 9 },
  { id: 34, category: 'Серьги', brand: 'Бренды Италии', title: 'Серьги винтаж', article: 'IT-E-034', material: 'Золото', probe: '585', weight: '3.8', size: '25', price: 38000, oldPrice: 54000, image: './images/earrings.jpg', stock: 7 },
  { id: 35, category: 'Серьги', brand: 'Yakutia Selection', title: 'Серьги с россыпью алмазов', article: 'YS-E-035', material: 'Платина', probe: '950', weight: '4.8', size: '18', price: 88000, oldPrice: 125000, image: './images/earrings.jpg', stock: 4 },
  { id: 36, category: 'Серьги', brand: 'Diamond Row', title: 'Серьги цветы', article: 'DR-E-036', material: 'Розовое золото', probe: '585', weight: '2.9', size: '16', price: 32000, oldPrice: 46000, image: './images/earrings.jpg', stock: 8 },
  { id: 37, category: 'Серьги', brand: 'Академия Бриллиантов', title: 'Серьги-подвески люкс', article: 'AB-E-037', material: 'Золото', probe: '750', weight: '5.4', size: '40', price: 75000, oldPrice: 105000, image: './images/earrings.jpg', stock: 3 },
  { id: 38, category: 'Серьги', brand: 'BASTET', title: 'Серьги с топазом', article: 'BT-E-038', material: 'Серебро', probe: '925', weight: '2.3', size: '14', price: 8500, oldPrice: 12500, image: './images/earrings.jpg', stock: 16 },
  { id: 39, category: 'Серьги', brand: 'Бренды Италии', title: 'Серьги звезды', article: 'IT-E-039', material: 'Белое золото', probe: '585', weight: '3.1', size: '12', price: 36000, oldPrice: 52000, image: './images/earrings.jpg', stock: 8 },
  { id: 40, category: 'Серьги', brand: 'Yakutia Selection', title: 'Серьги премиум коллекция', article: 'YS-E-040', material: 'Золото', probe: '750', weight: '7.2', size: '28', price: 135000, oldPrice: 190000, image: './images/earrings.jpg', stock: 2 },

  // ПОДВЕСКИ (15 штук)
  { id: 41, category: 'Подвески', brand: 'Diamond Row', title: 'Подвеска сердце с бриллиантом', article: 'DR-P-041', material: 'Золото', probe: '585', weight: '2.1', size: '18', price: 28000, oldPrice: 40000, image: './images/pendants.jpg', stock: 10 },
  { id: 42, category: 'Подвески', brand: 'Академия Бриллиантов', title: 'Подвеска крест', article: 'AB-P-042', material: 'Золото', probe: '585', weight: '3.4', size: '25', price: 35000, oldPrice: 50000, image: './images/pendants.jpg', stock: 8 },
  { id: 43, category: 'Подвески', brand: 'BASTET', title: 'Подвеска луна', article: 'BT-P-043', material: 'Серебро', probe: '925', weight: '1.8', size: '15', price: 6500, oldPrice: 9500, image: './images/pendants.jpg', stock: 15 },
  { id: 44, category: 'Подвески', brand: 'Бренды Италии', title: 'Подвеска бабочка', article: 'IT-P-044', material: 'Розовое золото', probe: '585', weight: '2.5', size: '20', price: 24000, oldPrice: 35000, image: './images/pendants.jpg', stock: 12 },
  { id: 45, category: 'Подвески', brand: 'Yakutia Selection', title: 'Подвеска с якутским алмазом', article: 'YS-P-045', material: 'Платина', probe: '950', weight: '3.8', size: '22', price: 72000, oldPrice: 102000, image: './images/pendants.jpg', stock: 4 },
  { id: 46, category: 'Подвески', brand: 'Diamond Row', title: 'Подвеска звезда', article: 'DR-P-046', material: 'Белое золото', probe: '585', weight: '2.3', size: '16', price: 26000, oldPrice: 38000, image: './images/pendants.jpg', stock: 9 },
  { id: 47, category: 'Подвески', brand: 'Академия Бриллиантов', title: 'Подвеска с изумрудом', article: 'AB-P-047', material: 'Золото', probe: '750', weight: '3.2', size: '20', price: 48000, oldPrice: 68000, image: './images/pendants.jpg', stock: 6 },
  { id: 48, category: 'Подвески', brand: 'BASTET', title: 'Подвеска круг', article: 'BT-P-048', material: 'Золото', probe: '585', weight: '1.9', size: '12', price: 18000, oldPrice: 26000, image: './images/pendants.jpg', stock: 14 },
  { id: 49, category: 'Подвески', brand: 'Бренды Италии', title: 'Подвеска ключ', article: 'IT-P-049', material: 'Золото', probe: '585', weight: '2.7', size: '28', price: 29000, oldPrice: 42000, image: './images/pendants.jpg', stock: 7 },
  { id: 50, category: 'Подвески', brand: 'Yakutia Selection', title: 'Подвеска роскошь', article: 'YS-P-050', material: 'Золото', probe: '750', weight: '4.5', size: '24', price: 85000, oldPrice: 120000, image: './images/pendants.jpg', stock: 3 },
  { id: 51, category: 'Подвески', brand: 'Diamond Row', title: 'Подвеска минимализм', article: 'DR-P-051', material: 'Золото', probe: '585', weight: '1.2', size: '10', price: 12000, oldPrice: 18000, image: './images/pendants.jpg', stock: 16 },
  { id: 52, category: 'Подвески', brand: 'Академия Бриллиантов', title: 'Подвеска с сапфиром', article: 'AB-P-052', material: 'Белое золото', probe: '585', weight: '2.8', size: '18', price: 42000, oldPrice: 60000, image: './images/pendants.jpg', stock: 5 },
  { id: 53, category: 'Подвески', brand: 'BASTET', title: 'Подвеска якорь', article: 'BT-P-053', material: 'Серебро', probe: '925', weight: '2.1', size: '22', price: 7500, oldPrice: 11000, image: './images/pendants.jpg', stock: 13 },
  { id: 54, category: 'Подвески', brand: 'Бренды Италии', title: 'Подвеска цветок', article: 'IT-P-054', material: 'Розовое золото', probe: '585', weight: '2.4', size: '16', price: 27000, oldPrice: 39000, image: './images/pendants.jpg', stock: 8 },
  { id: 55, category: 'Подвески', brand: 'Yakutia Selection', title: 'Подвеска премиум', article: 'YS-P-055', material: 'Платина', probe: '950', weight: '5.2', size: '26', price: 98000, oldPrice: 140000, image: './images/pendants.jpg', stock: 2 },

  // БРАСЛЕТЫ (15 штук)
  { id: 56, category: 'Браслеты', brand: 'Diamond Row', title: 'Браслет с бриллиантами', article: 'DR-B-056', material: 'Золото', probe: '585', weight: '8.5', size: '18', price: 65000, oldPrice: 92000, image: './images/bracelets.jpg', stock: 6 },
  { id: 57, category: 'Браслеты', brand: 'Академия Бриллиантов', title: 'Браслет теннисный', article: 'AB-B-057', material: 'Белое золото', probe: '585', weight: '12.3', size: '19', price: 85000, oldPrice: 120000, image: './images/bracelets.jpg', stock: 4 },
  { id: 58, category: 'Браслеты', brand: 'BASTET', title: 'Браслет цепочка', article: 'BT-B-058', material: 'Золото', probe: '585', weight: '5.2', size: '17', price: 32000, oldPrice: 46000, image: './images/bracelets.jpg', stock: 10 },
  { id: 59, category: 'Браслеты', brand: 'Бренды Италии', title: 'Браслет классика', article: 'IT-B-059', material: 'Золото', probe: '585', weight: '6.8', size: '18', price: 38000, oldPrice: 54000, image: './images/bracelets.jpg', stock: 8 },
  { id: 60, category: 'Браслеты', brand: 'Yakutia Selection', title: 'Браслет с якутскими алмазами', article: 'YS-B-060', material: 'Платина', probe: '950', weight: '15.4', size: '19', price: 145000, oldPrice: 205000, image: './images/bracelets.jpg', stock: 2 },
  { id: 61, category: 'Браслеты', brand: 'Diamond Row', title: 'Браслет минимализм', article: 'DR-B-061', material: 'Золото', probe: '585', weight: '4.2', size: '17', price: 28000, oldPrice: 40000, image: './images/bracelets.jpg', stock: 12 },
  { id: 62, category: 'Браслеты', brand: 'Академия Бриллиантов', title: 'Браслет с изумрудами', article: 'AB-B-062', material: 'Золото', probe: '750', weight: '10.5', size: '18', price: 95000, oldPrice: 135000, image: './images/bracelets.jpg', stock: 3 },
  { id: 63, category: 'Браслеты', brand: 'BASTET', title: 'Браслет плетение', article: 'BT-B-063', material: 'Серебро', probe: '925', weight: '8.1', size: '19', price: 12500, oldPrice: 18000, image: './images/bracelets.jpg', stock: 15 },
  { id: 64, category: 'Браслеты', brand: 'Бренды Италии', title: 'Браслет жесткий', article: 'IT-B-064', material: 'Розовое золото', probe: '585', weight: '9.3', size: '17', price: 52000, oldPrice: 74000, image: './images/bracelets.jpg', stock: 5 },
  { id: 65, category: 'Браслеты', brand: 'Yakutia Selection', title: 'Браслет роскошь', article: 'YS-B-065', material: 'Золото', probe: '750', weight: '13.8', size: '18', price: 125000, oldPrice: 178000, image: './images/bracelets.jpg', stock: 3 },
  { id: 66, category: 'Браслеты', brand: 'Diamond Row', title: 'Браслет тонкий', article: 'DR-B-066', material: 'Белое золото', probe: '585', weight: '3.5', size: '17', price: 24000, oldPrice: 35000, image: './images/bracelets.jpg', stock: 14 },
  { id: 67, category: 'Браслеты', brand: 'Академия Бриллиантов', title: 'Браслет с сапфирами', article: 'AB-B-067', material: 'Золото', probe: '585', weight: '11.2', size: '19', price: 78000, oldPrice: 110000, image: './images/bracelets.jpg', stock: 4 },
  { id: 68, category: 'Браслеты', brand: 'BASTET', title: 'Браслет шарм', article: 'BT-B-068', material: 'Золото', probe: '585', weight: '6.5', size: '18', price: 35000, oldPrice: 50000, image: './images/bracelets.jpg', stock: 9 },
  { id: 69, category: 'Браслеты', brand: 'Бренды Италии', title: 'Браслет винтаж', article: 'IT-B-069', material: 'Золото', probe: '585', weight: '7.8', size: '17', price: 45000, oldPrice: 64000, image: './images/bracelets.jpg', stock: 7 },
  { id: 70, category: 'Браслеты', brand: 'Yakutia Selection', title: 'Браслет премиум', article: 'YS-B-070', material: 'Платина', probe: '950', weight: '16.5', size: '19', price: 165000, oldPrice: 235000, image: './images/bracelets.jpg', stock: 1 },

  // ЦЕПИ (15 штук)
  { id: 71, category: 'Цепи', brand: 'Diamond Row', title: 'Цепь якорное плетение', article: 'DR-C-071', material: 'Золото', probe: '585', weight: '12.5', size: '50', price: 45000, oldPrice: 64000, image: './images/chains.jpg', stock: 8 },
  { id: 72, category: 'Цепи', brand: 'Академия Бриллиантов', title: 'Цепь бисмарк', article: 'AB-C-072', material: 'Золото', probe: '585', weight: '18.3', size: '55', price: 68000, oldPrice: 96000, image: './images/chains.jpg', stock: 5 },
  { id: 73, category: 'Цепи', brand: 'BASTET', title: 'Цепь панцирное плетение', article: 'BT-C-073', material: 'Серебро', probe: '925', weight: '15.2', size: '50', price: 8500, oldPrice: 12500, image: './images/chains.jpg', stock: 15 },
  { id: 74, category: 'Цепи', brand: 'Бренды Италии', title: 'Цепь венецианское плетение', article: 'IT-C-074', material: 'Золото', probe: '585', weight: '10.8', size: '45', price: 38000, oldPrice: 54000, image: './images/chains.jpg', stock: 10 },
  { id: 75, category: 'Цепи', brand: 'Yakutia Selection', title: 'Цепь премиум', article: 'YS-C-075', material: 'Платина', probe: '950', weight: '22.4', size: '60', price: 125000, oldPrice: 178000, image: './images/chains.jpg', stock: 3 },
  { id: 76, category: 'Цепи', brand: 'Diamond Row', title: 'Цепь тонкая', article: 'DR-C-076', material: 'Золото', probe: '585', weight: '6.2', size: '40', price: 22000, oldPrice: 32000, image: './images/chains.jpg', stock: 12 },
  { id: 77, category: 'Цепи', brand: 'Академия Бриллиантов', title: 'Цепь картье', article: 'AB-C-077', material: 'Белое золото', probe: '585', weight: '14.5', size: '50', price: 52000, oldPrice: 74000, image: './images/chains.jpg', stock: 6 },
  { id: 78, category: 'Цепи', brand: 'BASTET', title: 'Цепь двойная', article: 'BT-C-078', material: 'Золото', probe: '585', weight: '8.9', size: '45', price: 32000, oldPrice: 46000, image: './images/chains.jpg', stock: 11 },
  { id: 79, category: 'Цепи', brand: 'Бренды Италии', title: 'Цепь сингапур', article: 'IT-C-079', material: 'Розовое золото', probe: '585', weight: '11.3', size: '50', price: 42000, oldPrice: 60000, image: './images/chains.jpg', stock: 7 },
  { id: 80, category: 'Цепи', brand: 'Yakutia Selection', title: 'Цепь роскошь', article: 'YS-C-080', material: 'Золото', probe: '750', weight: '25.8', size: '55', price: 95000, oldPrice: 135000, image: './images/chains.jpg', stock: 4 },
  { id: 81, category: 'Цепи', brand: 'Diamond Row', title: 'Цепь снейк', article: 'DR-C-081', material: 'Золото', probe: '585', weight: '9.5', size: '45', price: 35000, oldPrice: 50000, image: './images/chains.jpg', stock: 9 },
  { id: 82, category: 'Цепи', brand: 'Академия Бриллиантов', title: 'Цепь фигаро', article: 'AB-C-082', material: 'Золото', probe: '585', weight: '16.2', size: '55', price: 58000, oldPrice: 82000, image: './images/chains.jpg', stock: 5 },
  { id: 83, category: 'Цепи', brand: 'BASTET', title: 'Цепь косичка', article: 'BT-C-083', material: 'Серебро', probe: '925', weight: '12.4', size: '50', price: 7500, oldPrice: 11000, image: './images/chains.jpg', stock: 16 },
  { id: 84, category: 'Цепи', brand: 'Бренды Италии', title: 'Цепь лав', article: 'IT-C-084', material: 'Золото', probe: '585', weight: '13.8', size: '50', price: 48000, oldPrice: 68000, image: './images/chains.jpg', stock: 6 },
  { id: 85, category: 'Цепи', brand: 'Yakutia Selection', title: 'Цепь эксклюзив', article: 'YS-C-085', material: 'Платина', probe: '950', weight: '28.5', size: '60', price: 155000, oldPrice: 220000, image: './images/chains.jpg', stock: 2 },

  // ЧАСЫ (15 штук)
  { id: 86, category: 'Часы', brand: 'Diamond Row', title: 'Часы женские с бриллиантами', article: 'DR-W-086', material: 'Золото', probe: '585', weight: '45.2', size: '32', price: 125000, oldPrice: 178000, image: './images/watches.jpg', stock: 4 },
  { id: 87, category: 'Часы', brand: 'Академия Бриллиантов', title: 'Часы мужские классика', article: 'AB-W-087', material: 'Золото', probe: '585', weight: '68.5', size: '42', price: 165000, oldPrice: 235000, image: './images/watches.jpg', stock: 3 },
  { id: 88, category: 'Часы', brand: 'BASTET', title: 'Часы кварцевые', article: 'BT-W-088', material: 'Серебро', probe: '925', weight: '35.8', size: '36', price: 28000, oldPrice: 40000, image: './images/watches.jpg', stock: 10 },
  { id: 89, category: 'Часы', brand: 'Бренды Италии', title: 'Часы винтаж', article: 'IT-W-089', material: 'Золото', probe: '585', weight: '52.3', size: '38', price: 95000, oldPrice: 135000, image: './images/watches.jpg', stock: 5 },
  { id: 90, category: 'Часы', brand: 'Yakutia Selection', title: 'Часы премиум с алмазами', article: 'YS-W-090', material: 'Платина', probe: '950', weight: '85.4', size: '40', price: 285000, oldPrice: 405000, image: './images/watches.jpg', stock: 1 },
  { id: 91, category: 'Часы', brand: 'Diamond Row', title: 'Часы минимализм', article: 'DR-W-091', material: 'Белое золото', probe: '585', weight: '38.2', size: '34', price: 85000, oldPrice: 120000, image: './images/watches.jpg', stock: 6 },
  { id: 92, category: 'Часы', brand: 'Академия Бриллиантов', title: 'Часы автоматические', article: 'AB-W-092', material: 'Золото', probe: '750', weight: '75.8', size: '42', price: 195000, oldPrice: 278000, image: './images/watches.jpg', stock: 2 },
  { id: 93, category: 'Часы', brand: 'BASTET', title: 'Часы спортивные', article: 'BT-W-093', material: 'Золото', probe: '585', weight: '48.5', size: '40', price: 78000, oldPrice: 110000, image: './images/watches.jpg', stock: 7 },
  { id: 94, category: 'Часы', brand: 'Бренды Италии', title: 'Часы элегантные', article: 'IT-W-094', material: 'Розовое золото', probe: '585', weight: '42.8', size: '36', price: 88000, oldPrice: 125000, image: './images/watches.jpg', stock: 5 },
  { id: 95, category: 'Часы', brand: 'Yakutia Selection', title: 'Часы роскошь', article: 'YS-W-095', material: 'Золото', probe: '750', weight: '92.3', size: '44', price: 245000, oldPrice: 350000, image: './images/watches.jpg', stock: 2 },
  { id: 96, category: 'Часы', brand: 'Diamond Row', title: 'Часы тонкие', article: 'DR-W-096', material: 'Золото', probe: '585', weight: '32.5', size: '32', price: 68000, oldPrice: 96000, image: './images/watches.jpg', stock: 8 },
  { id: 97, category: 'Часы', brand: 'Академия Бриллиантов', title: 'Часы швейцарские', article: 'AB-W-097', material: 'Белое золото', probe: '585', weight: '65.2', size: '40', price: 185000, oldPrice: 264000, image: './images/watches.jpg', stock: 3 },
  { id: 98, category: 'Часы', brand: 'BASTET', title: 'Часы модные', article: 'BT-W-098', material: 'Серебро', probe: '925', weight: '38.8', size: '36', price: 32000, oldPrice: 46000, image: './images/watches.jpg', stock: 9 },
  { id: 99, category: 'Часы', brand: 'Бренды Италии', title: 'Часы деловые', article: 'IT-W-099', material: 'Золото', probe: '585', weight: '58.5', size: '42', price: 115000, oldPrice: 164000, image: './images/watches.jpg', stock: 4 },
  { id: 100, category: 'Часы', brand: 'Yakutia Selection', title: 'Часы эксклюзив якутский', article: 'YS-W-100', material: 'Платина', probe: '950', weight: '98.5', size: '44', price: 325000, oldPrice: 465000, image: './images/watches.jpg', stock: 1 }
];

// КОРЗИНА - хранит id товара и количество
var cart = {};

// ИЗБРАННОЕ - хранит id товаров
var favorites = [];

// АВТОРИЗАЦИЯ - текущий пользователь
var currentUser = {
  role: 'guest',  // может быть: 'guest', 'user', 'admin'
  login: ''
};

// ============================================
// ФУНКЦИИ ДЛЯ РАБОТЫ С ДЕНЬГАМИ
// ============================================

// Форматирует число в рубли (например: 25000 -> "25 000р.")
function formatMoney(price) {
  var rounded = Math.round(Number(price) || 0);
  var formatted = rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return formatted + 'р.';
}

// ============================================
// ФУНКЦИИ ДЛЯ РАБОТЫ С ТОВАРАМИ
// ============================================

// Получить все товары
function getAllProducts() {
  return allProducts;
}

// Найти товар по ID
function getProductById(id) {
  var productId = Number(id);
  for (var i = 0; i < allProducts.length; i++) {
    if (allProducts[i].id === productId) {
      return allProducts[i];
    }
  }
  return null;
}

// ============================================
// ФУНКЦИИ ДЛЯ РАБОТЫ С КОРЗИНОЙ
// ============================================

// Получить корзину
function getCart() {
  return cart;
}

// Добавить товар в корзину (или изменить количество)
function addToCart(productId, quantity) {
  var id = Number(productId);
  var qty = Number(quantity) || 1;

  // Находим товар
  var product = getProductById(id);
  if (!product) {
    return;
  }

  // Проверяем наличие на складе
  var maxStock = Number(product.stock) || 0;

  // Текущее количество в корзине
  var currentQty = Number(cart[id]) || 0;

  // Новое количество
  var newQty = currentQty + qty;

  // Ограничиваем количеством на складе
  if (newQty > maxStock) {
    newQty = maxStock;
  }

  // Если количество 0 или меньше - удаляем из корзины
  if (newQty <= 0) {
    delete cart[id];
  } else {
    cart[id] = newQty;
  }

  // Отправляем событие об изменении
  sendChangeEvent();
}

// Установить точное количество товара в корзине
function setCartQuantity(productId, quantity) {
  var id = Number(productId);
  var qty = Number(quantity) || 0;

  // Находим товар
  var product = getProductById(id);
  if (!product) {
    return;
  }

  // Проверяем наличие на складе
  var maxStock = Number(product.stock) || 0;

  // Ограничиваем количеством на складе
  if (qty > maxStock) {
    qty = maxStock;
  }

  // Если 0 - удаляем
  if (qty <= 0) {
    delete cart[id];
  } else {
    cart[id] = qty;
  }

  sendChangeEvent();
}

// Получить общее количество товаров в корзине
function getCartCount() {
  var total = 0;
  for (var id in cart) {
    total += Number(cart[id]) || 0;
  }
  return total;
}

// Получить товары из корзины с полной информацией
function getCartItems() {
  var items = [];

  for (var id in cart) {
    var product = getProductById(Number(id));
    var quantity = Number(cart[id]) || 0;

    if (product && quantity > 0) {
      items.push({
        product: product,
        quantity: quantity
      });
    }
  }

  return items;
}

// Получить общую сумму корзины
function getCartTotal() {
  var total = 0;
  var items = getCartItems();

  for (var i = 0; i < items.length; i++) {
    var itemTotal = items[i].product.price * items[i].quantity;
    total += itemTotal;
  }

  return total;
}

// Очистить корзину
function clearCart() {
  cart = {};
  sendChangeEvent();
}

// ============================================
// ФУНКЦИИ ДЛЯ РАБОТЫ С ИЗБРАННЫМ
// ============================================

// Получить избранное
function getFavorites() {
  return favorites;
}

// Проверить, в избранном ли товар
function isFavorite(productId) {
  var id = Number(productId);
  for (var i = 0; i < favorites.length; i++) {
    if (favorites[i] === id) {
      return true;
    }
  }
  return false;
}

// Добавить/убрать из избранного (переключатель)
function toggleFavorite(productId) {
  var id = Number(productId);
  var index = -1;

  // Ищем товар в избранном
  for (var i = 0; i < favorites.length; i++) {
    if (favorites[i] === id) {
      index = i;
      break;
    }
  }

  // Если нашли - удаляем, если нет - добавляем
  if (index >= 0) {
    favorites.splice(index, 1);
    sendChangeEvent();
    return false;
  } else {
    favorites.push(id);
    sendChangeEvent();
    return true;
  }
}

// Получить товары из избранного
function getFavoriteProducts() {
  var products = [];

  for (var i = 0; i < favorites.length; i++) {
    var product = getProductById(favorites[i]);
    if (product) {
      products.push(product);
    }
  }

  return products;
}

// ============================================
// ФУНКЦИИ ДЛЯ АВТОРИЗАЦИИ
// ============================================

// Получить текущего пользователя
function getCurrentUser() {
  return currentUser;
}

// Проверить, админ ли пользователь
function isAdmin() {
  return currentUser.role === 'admin';
}

// Войти в систему
function login(username, password) {
  var user = String(username || '').trim();
  var pass = String(password || '');

  // Проверка админа
  if (user === 'admin' && pass === 'admin123') {
    currentUser.role = 'admin';
    currentUser.login = 'admin';
    sendChangeEvent();
    return { success: true, role: 'admin' };
  }

  // Проверка обычного пользователя
  if (user.length >= 2 && pass.length >= 1) {
    currentUser.role = 'user';
    currentUser.login = user;
    sendChangeEvent();
    return { success: true, role: 'user' };
  }

  return { success: false, role: 'guest' };
}

// Выйти из системы
function logout() {
  currentUser.role = 'guest';
  currentUser.login = '';
  sendChangeEvent();
}

// ============================================
// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// ============================================

// Отправить событие об изменении данных
function sendChangeEvent() {
  if (window.dispatchEvent) {
    var event = new CustomEvent('dr:change');
    window.dispatchEvent(event);
  }
}

// Добавить новый товар (скрытый по умолчанию)
function addNewProduct() {
  var newId = 1;
  if (allProducts.length > 0) {
    // Находим максимальный ID
    var maxId = 0;
    for (var i = 0; i < allProducts.length; i++) {
      if (allProducts[i].id > maxId) {
        maxId = allProducts[i].id;
      }
    }
    newId = maxId + 1;
  }

  var newProduct = {
    id: newId,
    category: 'Украшения',
    brand: 'Diamond Row',
    title: 'Новый товар',
    article: 'DR-' + newId,
    material: 'Золото',
    probe: '585',
    weight: '0',
    size: '0',
    price: 0,
    oldPrice: 0,
    image: './images/card1.jpg',
    stock: 0,
    isHidden: true // Скрыт из каталога по умолчанию
  };

  allProducts.push(newProduct);
  sendChangeEvent();
  return newProduct;
}

// Удалить товар
function deleteProduct(productId) {
  var id = Number(productId);
  var index = -1;
  for (var i = 0; i < allProducts.length; i++) {
    if (allProducts[i].id === id) {
      index = i;
      break;
    }
  }

  if (index >= 0) {
    allProducts.splice(index, 1);

    // Также удаляем из корзины и избранного
    if (cart[id]) {
      delete cart[id];
    }

    var favIndex = favorites.indexOf(id);
    if (favIndex >= 0) {
      favorites.splice(favIndex, 1);
    }

    sendChangeEvent();
    return true;
  }
  return false;
}

// ============================================
// ГЛОБАЛЬНЫЙ ОБЪЕКТ для доступа из других файлов
// ============================================

window.DRStore = {
  // Деньги
  money: formatMoney,

  // Товары
  getProducts: getAllProducts,
  getProductById: getProductById,
  addProduct: addNewProduct,
  deleteProduct: deleteProduct,

  // Корзина
  getCart: getCart,
  addToCart: addToCart,
  setCartQty: setCartQuantity,
  cartCount: getCartCount,
  cartItems: getCartItems,
  cartTotal: getCartTotal,
  clearCart: clearCart,

  // Избранное
  getFavs: getFavorites,
  isFav: isFavorite,
  toggleFav: toggleFavorite,
  getFavProducts: getFavoriteProducts,

  // Авторизация
  getAuth: getCurrentUser,
  isAdmin: isAdmin,
  login: login,
  logout: logout
};

function saveState() {
  try {
    localStorage.setItem('dr_user', JSON.stringify(currentUser));
    localStorage.setItem('dr_cart', JSON.stringify(cart));
    localStorage.setItem('dr_favs', JSON.stringify(favorites));
    localStorage.setItem('dr_products', JSON.stringify(allProducts));
  } catch (e) {
    console.error('Error saving state:', e);
  }
}

function loadState() {
  try {
    var savedUser = localStorage.getItem('dr_user');
    if (savedUser) {
      var u = JSON.parse(savedUser);
      currentUser.role = u.role;
      currentUser.login = u.login;
    }

    var savedCart = localStorage.getItem('dr_cart');
    if (savedCart) {
      var c = JSON.parse(savedCart);
      for (var key in c) {
        cart[key] = c[key];
      }
    }

    var savedFavs = localStorage.getItem('dr_favs');
    if (savedFavs) {
      var f = JSON.parse(savedFavs);
      favorites.length = 0; // Clear default
      for (var i = 0; i < f.length; i++) {
        favorites.push(f[i]);
      }
    }

    var savedProducts = localStorage.getItem('dr_products');
    if (savedProducts) {
      var p = JSON.parse(savedProducts);
      if (Array.isArray(p) && p.length > 0) {
        allProducts.length = 0;
        for (var j = 0; j < p.length; j++) {
          allProducts.push(p[j]);
        }
      }
    }
  } catch (e) {
    console.error('Error loading state:', e);
  }
}

loadState();

window.addEventListener('dr:change', saveState);