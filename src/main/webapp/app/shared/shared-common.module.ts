import { NgModule } from '@angular/core';

import { WebappcrmSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [WebappcrmSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [WebappcrmSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class WebappcrmSharedCommonModule {}
