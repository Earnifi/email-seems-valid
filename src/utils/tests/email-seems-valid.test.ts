import { emailSeemsValid } from '../../index';

describe('form validations', () => {
  it('valid emails', () => {
    expect(emailSeemsValid('test@crazy.finance')).toBe(true);
    expect(emailSeemsValid('test@yahoo.com')).toBe(true);
    expect(emailSeemsValid('test@gmail.com')).toBe(true);
    expect(emailSeemsValid('a@protonmail.com')).toBe(true);
    expect(emailSeemsValid('test@dawsbot.io')).toBe(true);
    expect(emailSeemsValid('test@protonmail.com')).toBe(true);

    expect(emailSeemsValid('test@foxmail.com')).toBe(true);

    expect(emailSeemsValid('test.another.third@outlook.com')).toBe(true);
  });
  it('invalid emails', () => {
    // inavlid characters (amazon SES rejects these)
    expect(emailSeemsValid('!test@gmail.com')).toBe(false);
    expect(emailSeemsValid('&test@gmail.com')).toBe(false);
    expect(emailSeemsValid('*test@gmail.com')).toBe(false);
    expect(emailSeemsValid('testÔÛãñõ@gmail.com')).toBe(false);
    expect(emailSeemsValid('t.ti̇st@gmai̇l.com')).toBe(false);
    expect(emailSeemsValid('tést@gmail.com')).toBe(false);

    // must have "@"
    expect(emailSeemsValid('no')).toBe(false);

    // mis-spellings
    expect(emailSeemsValid('test@gmail.ocm')).toBe(false);
    expect(emailSeemsValid('test@gmail.ccom')).toBe(false);
    expect(emailSeemsValid('test@gmail.comc')).toBe(false);
    expect(emailSeemsValid('test@gmai.com')).toBe(false);
    expect(emailSeemsValid('test@gmial.com')).toBe(false);
    expect(emailSeemsValid('test@gamal.com')).toBe(false);
    expect(emailSeemsValid('test@gemail.com')).toBe(false);
    expect(emailSeemsValid('test@gmal.com')).toBe(false);
    expect(emailSeemsValid('test@gnail.com')).toBe(false);
    expect(emailSeemsValid('test@gnal.com')).toBe(false);
    expect(emailSeemsValid('test@gail.com')).toBe(false);
    expect(emailSeemsValid('test@gmil.com')).toBe(false);
    expect(emailSeemsValid('test@gmail.comn')).toBe(false);
    expect(emailSeemsValid('test@gmail.col')).toBe(false);
    expect(emailSeemsValid('test@gmail.colm')).toBe(false);
    expect(emailSeemsValid('test@gmail.om')).toBe(false);

    expect(emailSeemsValid('test@protonmail.comc')).toBe(false);
    expect(emailSeemsValid('test@protonmail.come')).toBe(false);
    expect(emailSeemsValid('test@protonmail.comm')).toBe(false);
    expect(emailSeemsValid('test@protonmail.conm')).toBe(false);
    expect(emailSeemsValid('test@protonmail.conn')).toBe(false);
    expect(emailSeemsValid('test@protonmail.con')).toBe(false);
    expect(emailSeemsValid('test@protonmail.co')).toBe(false);
    expect(emailSeemsValid('test@protonmai.com')).toBe(false);

    expect(emailSeemsValid('test@yahoo.come')).toBe(false);

    expect(emailSeemsValid('test@foxmail.co')).toBe(false);
  });
});
