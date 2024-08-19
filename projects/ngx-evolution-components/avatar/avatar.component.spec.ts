import {
  ComponentFixture,
  DeferBlockBehavior,
  DeferBlockState,
  TestBed,
} from '@angular/core/testing';
import { AvatarComponent } from './avatar.component';

const mockName = 'Juan Perez';
const mockUrl = 'https://material.angular.io/assets/img/examples/shiba1.jpg';

describe('AvatarComponent', () => {
  let component: AvatarComponent;
  let fixture: ComponentFixture<AvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarComponent],
      deferBlockBehavior: DeferBlockBehavior.Manual,
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarComponent);
    component = fixture.componentInstance;
    component.name = mockName;
    fixture.detectChanges();
  });

  it('should have only the first two letters of a name', () => {
    const tagEl: HTMLElement = fixture.nativeElement;
    expect(tagEl.textContent).toContain('JP');
  });

  it('should render img when parameter is set', async () => {
    const fixture = TestBed.createComponent(AvatarComponent);
    const component = fixture.componentInstance;
    component.imgUrl = mockUrl;
    component.name = mockName;
    fixture.detectChanges();

    // Renders placeholder state by default
    const avatarEl: HTMLElement = fixture.nativeElement;

    // Render final state and verify it has the img tag and class
    const avatarImg = avatarEl.querySelector('img');
    expect(avatarImg).toBeTruthy();
    const imgClass = avatarImg?.className;
    expect(imgClass).toContain('avatar__size');
  });

  it('should have a size class according to size parameter', () => {
    component.size = 'lg';
    fixture.detectChanges();
    const avatarEl: HTMLElement = fixture.nativeElement;
    const avatar = avatarEl.querySelector('div');
    const avatarClass = avatar?.classList;
    expect(avatarClass).toContain('avatar__size-lg');
  });
});
