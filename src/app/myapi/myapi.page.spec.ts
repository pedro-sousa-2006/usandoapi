import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyapiPage } from './myapi.page';

describe('MyapiPage', () => {
  let component: MyapiPage;
  let fixture: ComponentFixture<MyapiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyapiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
