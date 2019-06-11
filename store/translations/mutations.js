/*
 * Copyright © Bold Brand Commerce Sp. z o.o. All rights reserved.
 * See LICENSE for license details.
 */
export default {
    addCardLanguageCode: (state, { languageCode }) => {
        state.cardsLanguageCodes.push(languageCode);
    },
    removeCardLanguageCode: (state, { index }) => {
        state.cardsLanguageCodes.splice(index, 1);
    },
    setTabTranslations: (state, { translations }) => {
        state.translations = { ...translations };
    },
    setMultilingualTranslationPropertyValue: (state, { languageCode, propertyName, value }) => {
        state.translations[propertyName] = {
            ...state.translations[propertyName],
            [languageCode]: value,
        };
    },
    initializeOptionTranslationValues: (state, { optionTranslations }) => {
        state.optionTranslationsValues = optionTranslations;
    },
    addOptionTranslationValueForLanguage: (state, { languageCode }) => {
        state.optionTranslationsValues[languageCode].push('');
    },
    addMultilingualOptionTranslation: (state, { languageCode }) => {
        state.optionTranslationsValues = {
            ...state.optionTranslationsValues, [languageCode]: [],
        };
    },
    clearStorage: (state) => {
        state.translations = {};
        state.cardsLanguageCodes = [];
        state.optionTranslationsValues = {};
    },
};
