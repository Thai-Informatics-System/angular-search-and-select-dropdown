# angular-search-and-select-dropdown

A powerful Angular Material-based dropdown component library by **Thai Informatic Systems Co. Ltd.**, offering flexible and customizable search-select dropdowns for both **client-side** and **server-side** data. It supports **single** and **multiple selection**, rich configuration options, hints, refresh support, and create-new actions — all built for modern Angular apps.

[![npm version](https://img.shields.io/npm/v/@servicemind.tis/angular-search-and-select-dropdown)](https://www.npmjs.com/package/@servicemind.tis/angular-search-and-select-dropdown)
[![npm downloads](https://img.shields.io/npm/dm/@servicemind.tis/angular-search-and-select-dropdown)](https://www.npmjs.com/package/@servicemind.tis/angular-search-and-select-dropdown)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 🚀 Features

- ✅ Single & Multiple selection modes
- ✅ Client-side and Server-side data filtering
- ✅ Searchable dropdown with custom filters
- ✅ Dynamic "Create New" action
- ✅ Hint messages & refresh button support
- ✅ Fully compatible with Angular Reactive Forms
- ✅ Material Design (Angular Material)

---

## 📦 Installation

```bash
npm install @servicemind.tis/angular-search-and-select-dropdown
```

### Required Peer Dependencies

```bash
npm install @angular/material @angular/cdk
```

---

## 🧩 Usage

### Module Setup

```ts
import { AngularSearchAndSelectDropdownModule } from '@servicemind.tis/angular-search-and-select-dropdown';

@NgModule({
  imports: [AngularSearchAndSelectDropdownModule]
})
export class MyFeatureModule {}
```

---

## 🌐 HttpClient Configuration Required

This library internally uses Angular's `HttpClient` for API calls (e.g., for server-side dropdowns). You **must provide `HttpClient`** in your app root or module setup.

### ✅ In Standalone Applications
In `main.ts`:

```ts
import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient() // use with interceptors below if needed
  ]
});
```

### ✅ In NgModules

```ts
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule
  ]
})
export class AppModule {}
```

### 🔐 With Interceptors (Optional)

If using interceptors in a standalone app:

```ts
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { httpInterceptorProviders } from './interceptors';

bootstrapApplication(AppComponent, {
  providers: [
    httpInterceptorProviders,
    provideHttpClient(withInterceptorsFromDi())
  ]
});
```

In traditional NgModules:

```ts
providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: MyInterceptor,
    multi: true
  }
]
```

---

## 🧠 Components

### `<angular-client-side-dropdown>`
Use when the full dataset is available in memory.

### `<angular-server-side-dropdown>`
Use when dropdown options should be fetched dynamically from an API endpoint.

---

## 💡 Quick Example

```html
<form [formGroup]="form">
  <angular-client-side-dropdown
    type="single"
    label="Client Side Single"
    nameKey="email"
    valueKey="id"
    [data]="options1"
    [config]="config.singleClientSideSelect"
    formControlName="singleClientSideSelect"
    (selectedValueNamesUpdated)="setOptionFirstData($event)">
  </angular-client-side-dropdown>
</form>
```

---

## ⚙️ Configuration Object

Both client- and server-side components accept configuration inputs defined in the following structure:

| Property | Type | Description |
|----------|------|-------------|
| `uri` | `string \| null` | API endpoint (for server-side) |
| `method` | `string \| null` | HTTP method (GET, POST) |
| `limit` | `number \| null` | Max items to retrieve/display |
| `setFirstOption` | `boolean \| null` | Auto-select first option |
| `ifLengthOnlyOne` | `boolean \| null` | Auto-select if only one result |
| `filter` | `object \| null` | Payload filters for server request |
| `isAllOption` | `boolean` | Include "All" option |
| `isSearchable` | `boolean` | Enable client search filtering |
| `isEnableRefreshMode` | `boolean` | Show refresh button |
| `clickRefreshBtn` | `Function` | Callback for refresh click |
| `hint` | `Hint` | Inline help below the dropdown |
| `createNew` | `CreateNew` | Define custom action to add new options |
| `noEntriesFoundLabel` | `string` | Message when list is empty |
| `additionalName` | `AdditionalName` | Combine multiple fields for label |
| `dataValueKey` | `string` | Key path to extract data |

> Interfaces for these are exported and fully type-safe.

---

## 🔌 Inputs & Outputs

Both `<angular-client-side-dropdown>` and `<angular-server-side-dropdown>` take the same inputs unless noted.

### Required inputs

These are declared `@Input({ required: true })` — Angular will error at compile time if you omit them.

| Input | Type | Description |
|---|---|---|
| `type` | `'single' \| 'multiple'` | Selection mode |
| `label` | `string` | Field label |
| `nameKey` | `string` | Property on each item used as the display text |
| `valueKey` | `string` | Property on each item used as the value |
| `config` | `ClientSide*` / `ServerSide*SelectionConfig` | Behaviour config — see below |

### Optional inputs

| Input | Type | Default | Description |
|---|---|---|---|
| `formControlName` | `string` | — | Reactive-forms control name |
| `data` | `any[]` | `[]` | Items to show. Required in practice for client-side; server-side fetches its own |
| `placeholder` | `string` | — | Placeholder text |
| `allOptionsLabel` | `string` | `'All'` | Label for the "All" entry when `config.isAllOption` is set |
| `isLabelOutside` | `boolean` | `false` | Render the label above the field instead of floating |
| `isDisplayPlaceholder` | `boolean` | `true` client-side, `false` server-side | Show the placeholder |
| `disabled` | `boolean` | `false` | Disable the control |
| `isRequired` | `boolean` | `false` | Show the required indicator |
| `payload` | `object` | `{}` | Extra body sent with server-side requests |
| `isRequiredPayload` | `boolean` | `false` | Only fetch once `payload` is non-empty |
| `appearance` | `MatFormFieldAppearance` | `'outline'` | Material form-field appearance |
| `classes` | `string` | `''` | Extra classes on the form field |
| `panelClass` | `string` | `''` | Extra classes on the dropdown overlay panel |
| `customId` | `string` | random | DOM id, useful for testing |
| `validationMessages` | `ValidationMessages[]` | `[]` | Error messages keyed by validator type |
| `prefix` / `suffix` | `string` | `''` | Material icon names rendered inside the field |
| `loading` | `boolean` | `false` | Show the loading state |
| `isRefreshing` | `boolean` | `false` | Show the refreshing state |
| `refetch` | `boolean` | `false` | **Server-side only** — set `true` to trigger a refetch |

### Outputs

| Output | Emits | Description |
|---|---|---|
| `selectedValueNamesUpdated` | `SelectedFilterDisplayValuesType` | Display values for the current selection, for filter-chip UIs |
| `dataChange` | `any` | Fires when the loaded option list changes |
| `loadingChange` | `boolean` | Fires as loading starts and finishes — use with `[(loading)]` |
| `refetchChange` | `boolean` | **Server-side only** — resets `refetch` after a fetch, use with `[(refetch)]` |

`loading` / `refetch` are two-way bindable via their matching `*Change` outputs.

---

## 📤 Real-World Example (Reactive Form)

```ts
this.form = new FormGroup({
  singleClientSideSelect: new FormControl('*'),
  multipleClientSideSelect: new FormControl('*'),
  singleServerSideSelect: new FormControl('*'),
  multipleServerSideSelect: new FormControl(null),
});
```

```ts
this.config = {
  singleClientSideSelect: {
    uri: 'https://api.freeapi.app/api/v1/public/randomusers',
    method: 'GET',
    limit: 100,
    isSearchable: true,
    isAllOption: true,
    hint: {
      msg: 'This is hint for example'
    },
    dataValueKey: 'data.data'
  },
  multipleServerSideSelect: {
    uri: 'https://mocki.io/v1/32ff3217-e809-442c-8e63-b4b0a8416325',
    method: 'GET',
    limit: 100,
    isSearchable: true,
    isAllOption: true,
    createNew: {
      label: 'Click here to add new.',
      color: 'green',
      clickBtn: () => window.open('https://www.google.com/', '_blank')
    }
  }
};
```

---

## 📦 Exported Types

- `ClientSideSingleSelectionConfig`
- `ClientSideMultipleSelectionConfig`
- `ServerSideSingleSelectionConfig`
- `ServerSideMultipleSelectionConfig`
- `SelectedFilterDisplayValueType`
- `SelectedFilterDisplayValuesType`
- `SelectedFiltersGroupedValuesType`
- `ValidationMessages`
- `AnyKeyValueObject`

---

## 🎨 Styling

The library renders Angular Material components, so your application must apply a Material theme — without one the dropdown renders unstyled.

If you don't already have a theme, the quickest option is a prebuilt one in `angular.json`:

```json
"styles": [
  "@angular/material/prebuilt-themes/azure-blue.css",
  "src/styles.scss"
]
```

Or define your own in `styles.scss`:

```scss
@use '@angular/material' as mat;

html {
  @include mat.theme((
    color: mat.$azure-palette,
    typography: Roboto,
    density: 0,
  ));
}
```

Per-instance styling goes through the `classes` input (on the form field) and `panelClass` (on the dropdown overlay).

---

## 🤝 Contributing

1. Clone the repository
2. Run `npm install`
3. Run `ng build angular-search-and-select-dropdown --watch`
4. Test changes via your demo app under `projects/`

---

## 🚀 Publishing to npm

To publish a new version of the package, tag your commit and push the tag:

```bash
git tag v1.0.2
git push origin v1.0.2
```


MIT License © [Thai Informatic Systems Co. Ltd](https://tis.co.th/).

---

## 📬 Support / Questions

For bugs, suggestions, or feature requests, please open an issue on the [GitHub repository](https://github.com/Thai-Informatics-System/angular-search-and-select-dropdown).

---

> Made with ❤️ by [Thai Informatic Systems Co. Ltd](https://tis.co.th/).
