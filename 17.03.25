#include <iostream>

class Color {
public:
    virtual void display() const = 0; 
    virtual Color* toRGB() = 0;  
    virtual Color* toCMYK() = 0;  
    virtual Color* toHSV() = 0;       
    virtual Color* mix(const Color& other) const = 0; 
    virtual ~Color() = default; 
};

class RGB : public Color {
private:
    int red, green, blue;

public:
    RGB(int r, int g, int b) : red(r), green(g), blue(b) {}

    void display() const override {
        std::cout << "RGB(" << red << ", " << green << ", " << blue << ")\n";
    }

    Color* toRGB() override {
        return new RGB(red, green, blue);
    }

    Color* toCMYK() override {

        float r = red / 255.0;
        float g = green / 255.0;
        float b = blue / 255.0;

        float k = 1 - std::max({r, g, b});
        float c = (1 - r - k) / (1 - k);
        float m = (1 - g - k) / (1 - k);
        float y = (1 - b - k) / (1 - k);

        return new CMYK(c * 100, m * 100, y * 100, k * 100);
    }

    Color* toHSV() override {

        float r = red / 255.0;
        float g = green / 255.0;
        float b = blue / 255.0;

        float max = std::max({r, g, b});
        float min = std::min({r, g, b});
        float h, s, v = max;

        float d = max - min;
        s = (max == 0) ? 0 : d / max;

        if (max == min) {
            h = 0; 
        } else {
            if (max == r) {
                h = (g - b) / d + (g < b ? 6 : 0);
            } else if (max == g) {
                h = (b - r) / d + 2;
            } else {
                h = (r - g) / d + 4;
            }
            h /= 6;
        }

        return new HSV(h * 360, s * 100, v * 100);
    }

    Color* mix(const Color& other) const override {
        const RGB& otherRGB = dynamic_cast<const RGB&>(other);
        return new RGB((red + otherRGB.red) / 2,
                       (green + otherRGB.green) / 2,
                       (blue + otherRGB.blue) / 2);
    }
};

class CMYK : public Color {
private:
    float cyan, magenta, yellow, black;

public:
    CMYK(float c, float m, float y, float k) : cyan(c), magenta(m), yellow(y), black(k) {}

    void display() const override {
        std::cout << "CMYK(" << cyan << ", " << magenta << ", " << yellow << ", " << black << ")\n";
    }

    Color* toRGB() override {
        float r = 255 * (1 - cyan / 100) * (1 - black / 100);
        float g = 255 * (1 - magenta / 100) * (1 - black / 100);
        float b = 255 * (1 - yellow / 100) * (1 - black / 100);
        return new RGB(static_cast<int>(r), static_cast<int>(g), static_cast<int>(b));
    }

    Color* toCMYK() override {
        return new CMYK(cyan, magenta, yellow, black);
    }

    Color* toHSV() override {
        Color* rgbColor = this->toRGB();
        return rgbColor->toHSV();
    }

    Color* mix(const Color& other) const override {
                const CMYK& otherCMYK = dynamic_cast<const CMYK&>(other);
        return new CMYK((cyan + otherCMYK.cyan) / 2,
                        (magenta + otherCMYK.magenta) / 2,
                        (yellow + otherCMYK.yellow) / 2,
                        (black + otherCMYK.black) / 2);
    }
};

class HSV : public Color {
private:
    float hue, saturation, value;

public:
    HSV(float h, float s, float v) : hue(h), saturation(s), value(v) {}

    void display() const override {
        std::cout << "HSV(" << hue << ", " << saturation << ", " << value << ")\n";
    }

    Color* toRGB() override {
        float r, g, b;
        float c = value * saturation / 100;
        float x = c * (1 - std::abs(fmod(hue / 60.0, 2) - 1));
        float m = value / 100 - c;

        if (hue >= 0 && hue < 60) {
            r = c; g = x; b = 0;
        } else if (hue >= 60 && hue < 120) {
            r = x; g = c; b = 0;
        } else if (hue >= 120 && hue < 180) {
            r = 0; g = c; b = x;
        } else if (hue >= 180 && hue < 240) {
            r = 0; g = x; b = c;
        } else if (hue >= 240 && hue < 300) {
            r = x; g = 0; b = c;
        } else {
            r = c; g = 0; b = x;
        }

        return new RGB(static_cast<int>((r + m) * 255),
                       static_cast<int>((g + m) * 255),
                       static_cast<int>((b + m) * 255));
    }

    Color* toCMYK() override {
        Color* rgbColor = this->toRGB();
        return rgbColor->toCMYK();
    }

    Color* toHSV() override {
        return new HSV(hue, saturation, value);
    }

    Color* mix(const Color& other) const override {
        const HSV& otherHSV = dynamic_cast<const HSV&>(other);
        return new HSV((hue + otherHSV.hue) / 2,
                       (saturation + otherHSV.saturation) / 2,
                       (value + otherHSV.value) / 2);
    }
};

int main() {
    RGB color1(255, 0, 0); 
    RGB color2(0, 0, 255); 

    std::cout << "Цвет 1: ";
    color1.display();
    std::cout << "Цвет 2: ";
    color2.display();

    Color* mixedColor = color1.mix(color2);
    std::cout << "Смешанный цвет (RGB): ";
    mixedColor->display();

    Color* cmykColor = color1.toCMYK();
    std::cout << "Цвет 1 в CMYK: ";
    cmykColor->display();
    delete cmykColor; 

    Color* hsvColor = color1.toHSV();
    std::cout << "Цвет 1 в HSV: ";
    hsvColor->display();
    delete hsvColor; 

    delete mixedColor; 
    return 0;
}
