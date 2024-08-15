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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have only the first two letters of a name', () => {
    const tagEl: HTMLElement = fixture.nativeElement;
    expect(tagEl.textContent).toContain('JP');
  });

  it('should render initials in placeholder, then have img tag once loaded', async () => {
    const fixture = TestBed.createComponent(AvatarComponent);
    const component = fixture.componentInstance;
    component.imgUrl = mockUrl;
    component.name = mockName;
    fixture.detectChanges();

    // Retrieve the list of all defer block fixtures and get the first block.
    const deferBlockFixture = (await fixture.getDeferBlocks())[0];

    // Renders placeholder state by default
    const avatarEl: HTMLElement = fixture.nativeElement;
    expect(avatarEl.textContent).toContain('JP');

    // Render final state and verify it has the img tag and class
    await deferBlockFixture.render(DeferBlockState.Complete);
    const avatarImg = avatarEl.querySelector('img');
    expect(avatarImg).toBeTruthy();
  });

  it('should have a size class according to size parameter', () => {
    const fixture = TestBed.createComponent(AvatarComponent);
    const component = fixture.componentInstance;
    component.name = mockName;
    component.size = 'lg';
    fixture.detectChanges();
    const avatarEl: HTMLElement = fixture.nativeElement;
    const avatar = avatarEl.querySelector('div');
    const avatarClass = avatar?.classList;
    expect(avatarClass).toContain('text-2xl');
  });
});
