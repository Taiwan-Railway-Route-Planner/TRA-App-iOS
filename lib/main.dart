import 'package:flutter/material.dart';
import 'package:flutter_gen/gen_l10n/app_localizations.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Startup Name generator',
      localizationsDelegates: AppLocalizations.localizationsDelegates,
      supportedLocales: AppLocalizations.supportedLocales,
      // supportedLocales: const [
      //   Locale('de', ''),
      //   Locale('en', ''),
      //   Locale('es', ''),
      //   Locale('fr', ''),
      //   Locale('hy', ''),
      //   Locale('ko', ''),
      //   Locale('nl', ''),
      //   Locale('ru', ''),
      //   Locale.fromSubtags(
      //       languageCode: 'zh', scriptCode: 'Hant', countryCode: 'TW'),
      // ],
      theme: ThemeData(
        appBarTheme: const AppBarTheme(
            backgroundColor: Colors.white, foregroundColor: Colors.black),
      ),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatelessWidget {
  const MyHomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(AppLocalizations.of(context)!.confirm),
      ),
    );
  }
}
