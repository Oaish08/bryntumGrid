/*!
 *
 * Bryntum Grid 4.3.0 (TRIAL VERSION)
 *
 * Copyright(c) 2021 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("Ru",[],n):"object"==typeof exports?exports.Ru=n():(e.bryntum=e.bryntum||{},e.bryntum.locales=e.bryntum.locales||{},e.bryntum.locales.Ru=n())}(window,(function(){return function(e){var n={};function o(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,o),t.l=!0,t.exports}return o.m=e,o.c=n,o.d=function(e,n,r){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)o.d(r,t,function(n){return e[n]}.bind(null,t));return r},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s="./lib/Grid/localization/Ru.js")}({"../Core/lib/Core/localization/LocaleHelper.js":
/*!*****************************************************!*\
  !*** ../Core/lib/Core/localization/LocaleHelper.js ***!
  \*****************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LocaleHelper; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * @module Core/localization/LocaleHelper\n */\n\n/**\n * Provides locale management methods.\n */\nvar LocaleHelper = /*#__PURE__*/function () {\n  function LocaleHelper() {\n    _classCallCheck(this, LocaleHelper);\n  }\n\n  _createClass(LocaleHelper, null, [{\n    key: "mergeLocales",\n    value:\n    /**\n     * Merges all properties of provided locales into new locale.\n     * Locales are merged in order they provided and locales which go later replace same properties of previous locales.\n     * @param {...Object} locales Locales to merge\n     * @return {Object} Merged locale\n     */\n    function mergeLocales() {\n      var result = {};\n\n      for (var _len = arguments.length, locales = new Array(_len), _key = 0; _key < _len; _key++) {\n        locales[_key] = arguments[_key];\n      }\n\n      locales.forEach(function (locale) {\n        Object.keys(locale).forEach(function (key) {\n          if (_typeof(locale[key]) === \'object\') {\n            result[key] = _objectSpread(_objectSpread({}, result[key]), locale[key]);\n          } else {\n            result[key] = locale[key];\n          }\n        });\n      });\n      return result;\n    }\n    /**\n     * Removes all properties from `locale` that are present in the provided `trimLocale`.\n     * @param {Object} locale locales to merge\n     * @param {Object} trimLocale locales to merge\n     */\n\n  }, {\n    key: "trimLocale",\n    value: function trimLocale(locale, _trimLocale) {\n      var remove = function remove(key, subKey) {\n        if (!locale[key]) {\n          throw new Error("Key \\"".concat(key, "\\" doesn\'t exist in locale"));\n        }\n\n        if (subKey) {\n          if (!locale[key][subKey]) {\n            throw new Error("SubKey \\"".concat(key, ".").concat(subKey, "\\" doesn\'t exist in locale"));\n          }\n\n          delete locale[key][subKey];\n        } else {\n          delete locale[key];\n        }\n      };\n\n      Object.keys(_trimLocale).forEach(function (key) {\n        if (Object.keys(_trimLocale[key]).length > 0) {\n          Object.keys(_trimLocale[key]).forEach(function (subKey) {\n            return remove(key, subKey);\n          });\n        } else {\n          remove(key);\n        }\n      });\n    }\n    /**\n     * Put the locale under `window.bryntum.locales` to make sure it can be discovered automatically\n     * @param {String} localeName Locale name\n     * @param {Object} config Locale config\n     */\n\n  }, {\n    key: "publishLocale",\n    value: function publishLocale(localeName, config) {\n      var bryntum = window.bryntum = window.bryntum || {},\n          locales = bryntum.locales = bryntum.locales || {}; // Avoid registering locales twice\n\n      locales[localeName] = !locales[localeName] ? config : this.mergeLocales(locales[localeName], config);\n    }\n  }]);\n\n  return LocaleHelper;\n}();\n\n\n\n//# sourceURL=webpack://bryntum.locales.%5Bname%5D/../Core/lib/Core/localization/LocaleHelper.js?')},"../Core/lib/Core/localization/Ru.js":
/*!*******************************************!*\
  !*** ../Core/lib/Core/localization/Ru.js ***!
  \*******************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\nvar localeName = 'Ru',\n    localeDesc = 'Русский',\n    locale = {\n  localeName: localeName,\n  localeDesc: localeDesc,\n  Object: {\n    Yes: 'Да',\n    No: 'Нет',\n    Cancel: 'Отмена',\n    Ok: 'OK'\n  },\n  //region Widgets\n  Combo: {\n    noResults: 'Нет результатов',\n    recordNotCommitted: 'Запись не может быть добавлена',\n    addNewValue: function addNewValue(value) {\n      return \"\\u0434\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C \".concat(value);\n    }\n  },\n  FilePicker: {\n    file: 'Файл'\n  },\n  Field: {\n    // native input ValidityState statuses\n    badInput: 'Недопустимое значение поля',\n    patternMismatch: 'Значение должно соответствовать определенному шаблону',\n    rangeOverflow: function rangeOverflow(value) {\n      return \"\\u0417\\u043D\\u0430\\u0447\\u0435\\u043D\\u0438\\u0435 \\u0434\\u043E\\u043B\\u0436\\u043D\\u043E \\u0431\\u044B\\u0442\\u044C \\u043C\\u0435\\u043D\\u044C\\u0448\\u0435 \\u0438\\u043B\\u0438 \\u0440\\u0430\\u0432\\u043D\\u043E \".concat(value.max);\n    },\n    rangeUnderflow: function rangeUnderflow(value) {\n      return \"\\u0417\\u043D\\u0430\\u0447\\u0435\\u043D\\u0438\\u0435 \\u0434\\u043E\\u043B\\u0436\\u043D\\u043E \\u0431\\u044B\\u0442\\u044C \\u0431\\u043E\\u043B\\u044C\\u0448\\u0435 \\u0438\\u043B\\u0438 \\u0440\\u0430\\u0432\\u043D\\u043E \".concat(value.min);\n    },\n    stepMismatch: 'Значение должно соответствовать шагу',\n    tooLong: 'Значение должно быть короче',\n    tooShort: 'Значение должно быть длиннее',\n    typeMismatch: 'Значение должно быть в специальном формате',\n    valueMissing: 'Поле не может быть пустым',\n    invalidValue: 'Недопустимое значение поля',\n    minimumValueViolation: 'Нарушение минимального значения',\n    maximumValueViolation: 'Нарушение максимального значения',\n    fieldRequired: 'Поле не может быть пустым',\n    validateFilter: 'Выберите значение из списка'\n  },\n  DateField: {\n    invalidDate: 'Невернывй формат даты'\n  },\n  NumberFormat: {\n    locale: 'ru',\n    currency: 'RUB'\n  },\n  DurationField: {\n    invalidUnit: 'Неверные единицы'\n  },\n  TimeField: {\n    invalidTime: 'Неверный формат времени'\n  },\n  List: {\n    loading: 'Загрузка...'\n  },\n  // needed here due to LoadMaskable\n  GridBase: {\n    loadMask: 'Загрузка...',\n    syncMask: 'Сохраняю данные, пожалуйста подождите...'\n  },\n  PagingToolbar: {\n    firstPage: 'Перейти на первую страницу',\n    prevPage: 'Перейти на предыдущую страницу',\n    page: 'страница',\n    nextPage: 'Перейти на следующую страницу',\n    lastPage: 'Перейти на последнюю страницу',\n    reload: 'Перезагрузить текущую страницу',\n    noRecords: 'Нет записей для отображения',\n    pageCountTemplate: function pageCountTemplate(data) {\n      return \"\\u0438\\u0437 \".concat(data.lastPage);\n    },\n    summaryTemplate: function summaryTemplate(data) {\n      return \"\\u041F\\u043E\\u043A\\u0430\\u0437\\u0430\\u043D\\u044B \\u0437\\u0430\\u043F\\u0438\\u0441\\u0438 \".concat(data.start, \" - \").concat(data.end, \" \\u0438\\u0437 \").concat(data.allCount);\n    }\n  },\n  PanelCollapser: {\n    Collapse: 'Свернуть',\n    Expand: 'Развернуть'\n  },\n  UndoRedo: {\n    Undo: 'Отменить',\n    Redo: 'Повторить',\n    UndoLastAction: 'Отменить последнее действие',\n    RedoLastAction: 'Повторить последнее отмененное действие'\n  },\n  //endregion\n  //region Others\n  DateHelper: {\n    locale: 'ru',\n    weekStartDay: 1,\n    // Non-working days which match weekends by default, but can be changed according to schedule needs\n    nonWorkingDays: {\n      0: true,\n      6: true\n    },\n    // Days considered as weekends by the selected country, but could be working days in the schedule\n    weekends: {\n      0: true,\n      6: true\n    },\n    unitNames: [{\n      single: 'миллисек',\n      plural: 'миллисек',\n      abbrev: 'мс'\n    }, {\n      single: 'секунда',\n      plural: 'секунд',\n      abbrev: 'с'\n    }, {\n      single: 'минута',\n      plural: 'минут',\n      abbrev: 'мин'\n    }, {\n      single: 'час',\n      plural: 'часов',\n      abbrev: 'ч'\n    }, {\n      single: 'день',\n      plural: 'дней',\n      abbrev: 'д'\n    }, {\n      single: 'неделя',\n      plural: 'недели',\n      abbrev: 'нед'\n    }, {\n      single: 'месяц',\n      plural: 'месяцев',\n      abbrev: 'мес'\n    }, {\n      single: 'квартал',\n      plural: 'кварталов',\n      abbrev: 'квар'\n    }, {\n      single: 'год',\n      plural: 'лет',\n      abbrev: 'г'\n    }, {\n      single: 'десятилетие',\n      plural: 'десятилетия',\n      abbrev: 'дес'\n    }],\n    // Used to build a RegExp for parsing time units.\n    // The full names from above are added into the generated Regexp.\n    // So you may type \"2 н\" or \"2 нед\" or \"2 неделя\" or \"2 недели\" into a DurationField.\n    // When generating its display value though, it uses the full localized names above.\n    unitAbbreviations: [['мс', 'мил'], ['с', 'сек'], ['м', 'мин'], ['ч'], ['д', 'ден', 'дне'], ['н', 'нед'], ['мес'], ['к', 'квар', 'квр'], ['г'], ['дес']],\n    parsers: {\n      L: 'DD.MM.YYYY',\n      LT: 'HH:mm'\n    },\n    ordinalSuffix: function ordinalSuffix(number) {\n      return \"\".concat(number, \"-\\u0439\");\n    }\n  },\n  //endregion\n  //region Trial\n  TrialButton: {\n    downloadTrial: 'Пробная версия'\n  },\n  TrialPanel: {\n    title: 'Пожалуйста, заполните поля',\n    name: 'Имя',\n    email: 'Email',\n    company: 'Компания',\n    product: 'Продукт',\n    cancel: 'Отмена',\n    submit: 'Отправить',\n    downloadStarting: 'Загрузка начинается, подождите ...'\n  } //endregion\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (locale);\n\n//# sourceURL=webpack://bryntum.locales.%5Bname%5D/../Core/lib/Core/localization/Ru.js?")},"./lib/Grid/localization/Ru.js":
/*!*************************************!*\
  !*** ./lib/Grid/localization/Ru.js ***!
  \*************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Core_localization_Ru_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Core/localization/Ru.js */ \"../Core/lib/Core/localization/Ru.js\");\n/* harmony import */ var _Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Core/localization/LocaleHelper.js */ \"../Core/lib/Core/localization/LocaleHelper.js\");\n\n\nvar locale = _Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mergeLocales(_Core_localization_Ru_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n  //region Features\n  ColumnPicker: {\n    column: 'Колонка',\n    columnsMenu: 'Колонки',\n    hideColumn: 'Спрятать колонку',\n    hideColumnShort: 'Спрятать',\n    newColumns: 'Новые столбцы'\n  },\n  Filter: {\n    applyFilter: 'Применить фильтр',\n    filter: 'Фильтр',\n    editFilter: 'Изменить фильтр',\n    on: 'В этот день',\n    before: 'До',\n    after: 'После',\n    equals: 'Равно',\n    lessThan: 'Меньше, чем',\n    moreThan: 'Больше, чем',\n    removeFilter: 'Убрать фильтр'\n  },\n  FilterBar: {\n    enableFilterBar: 'Показать панель фильтров',\n    disableFilterBar: 'Спрятать панель фильтров'\n  },\n  Group: {\n    group: 'Группа',\n    groupAscending: 'Группа по возрастанию',\n    groupDescending: 'Группа по убыванию',\n    groupAscendingShort: 'Возрастание',\n    groupDescendingShort: 'Убывание',\n    stopGrouping: 'Убрать группу',\n    stopGroupingShort: 'Убрать'\n  },\n  Search: {\n    searchForValue: 'Найти значение'\n  },\n  Sort: {\n    sort: 'Сортировка',\n    sortAscending: 'Сортировать по возрастанию',\n    sortDescending: 'Сортировать по убыванию',\n    multiSort: 'Сложная сортировка',\n    removeSorter: 'Убрать сортировку',\n    addSortAscending: 'Добавить сортировку по возрастанию',\n    addSortDescending: 'Добавить сортировку по убыванию',\n    toggleSortAscending: 'Сортировать по возрастанию',\n    toggleSortDescending: 'Сортировать по убыванию',\n    sortAscendingShort: 'Возрастание',\n    sortDescendingShort: 'Убывание',\n    removeSorterShort: 'Убрать',\n    addSortAscendingShort: '+ Возраст...',\n    addSortDescendingShort: '+ Убыв...'\n  },\n  //endregion\n  //region Grid\n  GridBase: {\n    loadFailedMessage: 'Не удалось загрузить!',\n    syncFailedMessage: 'Не удалось синхронизировать!',\n    unspecifiedFailure: 'Неуказанная ошибка',\n    networkFailure: 'Ошибка сети',\n    parseFailure: 'Не удалось разобрать ответ сервера',\n    // moved to Core for LoadMaskable:\n    // loadMask           : 'Загрузка...',\n    // syncMask           : 'Сохраняю данные, пожалуйста подождите...',\n    noRows: 'Нет записей для отображения',\n    removeRow: 'Удалить',\n    moveColumnLeft: 'Передвинуть в левую секцию',\n    moveColumnRight: 'Передвинуть в правую секцию',\n    moveColumnTo: function moveColumnTo(region) {\n      return \"\\u041F\\u0435\\u0440\\u0435\\u043C\\u0435\\u0441\\u0442\\u0438\\u0442\\u044C \\u043A\\u043E\\u043B\\u043E\\u043D\\u043A\\u0443 \\u0432 \\u0441\\u0435\\u043A\\u0446\\u0438\\u044E \".concat(region);\n    }\n  },\n  CellMenu: {\n    removeRow: 'Удалить'\n  },\n  RowCopyPaste: {\n    copyRecord: 'Копировать',\n    cutRecord: 'Вырезать',\n    pasteRecord: 'Вставить'\n  },\n  //endregion\n  //region Export\n  PdfExport: {\n    'Waiting for response from server': 'Ожидание ответа от сервера...',\n    'Export failed': 'Не удалось экспортировать',\n    'Server error': 'На сервере произошла ошибка',\n    'Generating pages': 'Генерация страниц...'\n  },\n  ExportDialog: {\n    width: '40em',\n    labelWidth: '13em',\n    exportSettings: 'Настройки',\n    \"export\": 'Экспорт',\n    exporterType: 'Разбивка на страницы',\n    cancel: 'Отмена',\n    fileFormat: 'Формат файла',\n    rows: 'Строки',\n    alignRows: 'Выровнять строки',\n    columns: 'Колонки',\n    paperFormat: 'Размер листа',\n    orientation: 'Ориентация',\n    repeatHeader: 'Повторять заголовок'\n  },\n  ExportRowsCombo: {\n    all: 'Все строки',\n    visible: 'Видимые строки'\n  },\n  ExportOrientationCombo: {\n    portrait: 'Портретная',\n    landscape: 'Ландшафтная'\n  },\n  SinglePageExporter: {\n    singlepage: 'Одна страница'\n  },\n  MultiPageExporter: {\n    multipage: 'Многостраничный',\n    exportingPage: function exportingPage(_ref) {\n      var currentPage = _ref.currentPage,\n          totalPages = _ref.totalPages;\n      return \"\\u042D\\u043A\\u0441\\u043F\\u043E\\u0440\\u0442 \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u044B \".concat(currentPage, \"/\").concat(totalPages);\n    }\n  },\n  MultiPageVerticalExporter: {\n    multipagevertical: 'Многостраничный (по вертикали)',\n    exportingPage: function exportingPage(_ref2) {\n      var currentPage = _ref2.currentPage,\n          totalPages = _ref2.totalPages;\n      return \"\\u042D\\u043A\\u0441\\u043F\\u043E\\u0440\\u0442 \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u044B \".concat(currentPage, \"/\").concat(totalPages);\n    }\n  } //endregion\n\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (locale);\n\n//# sourceURL=webpack://bryntum.locales.%5Bname%5D/./lib/Grid/localization/Ru.js?")}}).default}));