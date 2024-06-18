import { Component } from 'react';
import AOS from 'aos';
import * as S from './style';
import 'aos/dist/aos.css';
import { MenuNav } from '../../components/Menu';
import { GlobalStyle } from './style';

export default class Materiais extends Component {
  componentDidMount() {
    AOS.init({
        duration: 3000
       
    });
  }

  render() {
    return (
      <>
            <GlobalStyle />

      <S.Menu>
        <MenuNav />
        </S.Menu>

        <S.Exibicao>
        <img src = "Mockup1.svg" ></img>
        <S.exibicao2>
        <img src = "Mockup2.svg" ></img>
        </S.exibicao2>
        </S.Exibicao>

        <S.Container>
          <div className="div" data-aos="fade-left" data-aos-duration="3000" data-aos-once="false">

            <h1>DESCRIÇÃO</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac consectetur metus. Fusce vel dapibus mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ultricies turpis nec enim posuere, vitae interdum erat iaculis. Nulla facilisi. Donec commodo iaculis fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ultrices, sapien et efficitur porta, mauris metus commodo urna, nec ultricies libero felis in diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla imperdiet quis nunc sed vehicula.

Etiam eu magna et quam rutrum pretium. Curabitur dignissim sem eros. Vestibulum bibendum viverra hendrerit. Nam dictum odio tellus, et condimentum leo blandit at. Sed eu lacus risus. Nulla facilisis leo eget arcu facilisis ullamcorper. Morbi purus est, porta ut lectus eu, tempus blandit nisi.

Donec gravida nisi at dignissim fringilla. Proin lobortis pulvinar mi id vulputate. Pellentesque eu leo sit amet magna rhoncus accumsan. Pellentesque vel rutrum metus. Sed bibendum ultrices lorem vitae malesuada. Praesent tincidunt dui vitae urna cursus, quis ullamcorper massa imperdiet. Ut ut vehicula quam.

Quisque auctor, diam ut porta maximus, dui nisi rutrum risus, ut vehicula felis sapien vel sapien. Suspendisse nibh eros, ultrices in dapibus eget, tempor id nunc. Etiam porta commodo diam at volutpat. Nullam quis purus id massa commodo porttitor. Aliquam erat volutpat. Suspendisse dignissim ex sem, condimentum dignissim dolor molestie ut. Morbi commodo imperdiet augue sed porta. Quisque metus felis, sodales vestibulum accumsan a, posuere ut ipsum. Cras vitae ante purus. Pellentesque ac efficitur tortor. Integer eu scelerisque ante.

Phasellus nec tincidunt arcu. Aenean maximus lorem sed arcu laoreet, a porta sapien laoreet. Pellentesque eu mi enim. In ligula felis, convallis consequat varius non, finibus quis diam. Sed pulvinar scelerisque sem convallis lobortis. Fusce placerat neque et lectus luctus, eu eleifend purus euismod. Vivamus viverra interdum nibh ac semper. Ut cursus ipsum et tempor congue. Mauris eleifend felis id gravida sodales. Nullam tortor metus, sagittis ut scelerisque id, molestie sed dui. Integer vel diam non lacus posuere varius at quis ligula. Phasellus sit amet magna quis libero placerat dignissim a non erat. Phasellus sodales, lectus vitae pharetra mattis, justo elit tincidunt nisl, id varius tellus leo et odio. Morbi at leo libero. Aenean sit amet odio at ante rhoncus faucibus eu vel ante. Sed vitae velit vel mi viverra placerat.</p>
          </div>
        </S.Container>


      </>
    );
  }
}
