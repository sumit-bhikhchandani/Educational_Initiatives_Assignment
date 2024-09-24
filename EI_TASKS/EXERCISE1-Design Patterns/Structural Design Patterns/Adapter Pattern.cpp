#include <iostream>

// Advanced Media Player Interface
class AdvancedMediaPlayer {
public:
    virtual void playVlc() = 0; // Play VLC files
    virtual void playMp4() = 0; // Play MP4 files
};

// VLC Player
class VlcPlayer : public AdvancedMediaPlayer {
public:
    void playVlc() override {
        std::cout << "Playing VLC file" << std::endl; // Play VLC
    }
    
    void playMp4() override {}
};

// MP4 Player
class Mp4Player : public AdvancedMediaPlayer {
public:
    void playVlc() override {}
    
    void playMp4() override {
        std::cout << "Playing MP4 file" << std::endl; // Play MP4
    }
};

// Media Player using Adapter
class MediaPlayer {
    AdvancedMediaPlayer* advancedMediaPlayer;
public:
    MediaPlayer(AdvancedMediaPlayer* player) : advancedMediaPlayer(player) {}

    void play(const std::string& fileType) {
        if (fileType == "VLC") {
            advancedMediaPlayer->playVlc(); // Play VLC
        } else if (fileType == "MP4") {
            advancedMediaPlayer->playMp4(); // Play MP4
        }
    }
};

int main() {
    VlcPlayer vlcPlayer;
    MediaPlayer mediaPlayer(&vlcPlayer);
    mediaPlayer.play("VLC"); // Play VLC file

    Mp4Player mp4Player;
    mediaPlayer = MediaPlayer(&mp4Player);
    mediaPlayer.play("MP4"); // Play MP4 file

    return 0;
}
